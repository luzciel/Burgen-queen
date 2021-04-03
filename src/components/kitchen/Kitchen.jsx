import React, { useEffect, useState, Fragment } from 'react'
import { db } from '../../firebase'
import "./kitchen.css"

const Kitchen = () => {

    const [orderDetail, setOrderDetail] = useState([]);

    // Recupera la coleccion Orders de firebase
    const getOrders = async () => {
        try {
            await db.collection("Orders").onSnapshot((querySnapshot) => {
                const orders = []
                querySnapshot.forEach((doc) => {
                    orders.push({ ...doc.data(), id: doc.id });
                });
                setOrderDetail(orders); // actualiza orders agregando el id del Documento de firebase
            });
        } catch (error) {
            console.log('Error:', error)
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    //Agrega coleccion readyOrders a firebase
    const readyOrders = async (order) => {
        const date = new Date();
        const fecha = `${(`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${date.getFullYear()} ${(`00${date.getHours()}`).slice(-2)}:${(`00${date.getMinutes()}`).slice(-2)}:${(`00${date.getSeconds()}`).slice(-2)}`;
        try {
            const docRef = await db.collection('readyOrders').add({
                dateEnd: fecha,
                orderCompleted: order,
            })
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    //Elimina el documento de Coleccion Orders (Cocina)
    const deleteColeccion = async (id, order) => {
        try {
            await db.collection('Orders').doc(id).delete()
            console.log("eliminar", id)
        } catch (error) {
            console.error('Error deleting document:', error)
        }
        readyOrders(order);
    }


    console.log(orderDetail)
    return (
        <Fragment>
            <div className="kitchen-body container">
                <h1>COCINA</h1>
                <div classNa="">

                {orderDetail.map(order => (
                    <div className="col-sm kitchen" key={order.id}>
                        <h3>NOMBRE</h3>
                        <table className="table">
                        <thead>
                        </thead>
                            <div>{order.product.map(item => (
                                <tbody className="" key={item.id}>
                                    <tr>
                                    <th>{item.producto}
                                    {/* <p>{item.extra}</p>
                                    <p>{item.extra}</p>
                                    <p>{item.opcion}</p> */}
                                    </th>
                                    <td>{item.cantidad}</td>
                                    </tr>
                                </tbody>
                                ))}
                            </div>
                        </table>
                        <button id="OrderList" onClick={() => deleteColeccion(order.id, order)}>Orden Lista</button>
                    </div>
                ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Kitchen;