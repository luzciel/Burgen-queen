import React, { useEffect, useState, Fragment } from 'react'
import { db } from '../../firebase'
import "./kitchen.css"

const Kitchen = () => {

    const [orderDetail, setOrderDetail] = useState([]);

    // Recupera la coleccion Orders de firebase
    const getOrders = async () => {
        try {
            await db.collection("Orders").orderBy("dateOrder", "asc").onSnapshot((querySnapshot) => {
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

    // Se mantiene atento de las actualizaciones 
    useEffect(() => {
        getOrders();
    }, []);

    //Agrega coleccion readyOrders a firebase
    const readyOrders = async (order) => {
        const date = new Date();
        const fecha = `${(`00${date.getDate()}`)
            .slice(-2)}/${(`00${date.getMonth() + 1}`)
                .slice(-2)}/${date.getFullYear()} ${(`00${date.getHours()}`)
                    .slice(-2)}:${(`00${date.getMinutes()}`)
                        .slice(-2)}:${(`00${date.getSeconds()}`)
                            .slice(-2)}`;
        try {
            const docRef = await db.collection('readyOrders').add({
                dateEnd: fecha, //Hora de salida de cocina
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
        } catch (error) {
            console.error('Error deleting document:', error)
        }
        readyOrders(order); // LLama a readyOrders el cual Agrega coleccion readyOrders a firebase
    }


    return (
        <Fragment>
            <div className="orders-body">
                <h1>Preparar pedido:</h1>
                <div className="container-orders">
                    {orderDetail.map(order => (
                        <div className="col-sm kitchen" key={order.id}>
                            <div className="container-name">
                                <h3>{order.clientName}</h3>
                            </div>
                            <div className="container-detail-order">
                                <div className="container-table-waiter">
                                    <h5><strong>Mesa:</strong> {order.tableNumber}</h5>
                                    <h5><strong>Garzon:</strong> {order.waiterName}</h5>
                                </div>
                                <h5> <strong>Entrada:</strong> {order.dateOrder}</h5>
                                <hr />
                            </div>
                            <div className="container-product">{order.product.map(item => (
                                <div className="container-product-item" key={item.id}>
                                    <div className="container" >
                                        <div className="row">
                                            <div className="col">
                                            <p><strong>{item.producto}</strong></p>
                                            <p className="product-opcion">{item.opcion}</p>
                                            {
                                                item.adicional.map((value, index) => (
                                                    <div className="product-opcion" key={index} >
                                                        {value.adicional}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col">
                                        <p className="price">{item.cantidad}</p>
                                        </div>
                                    </div>
                                <hr />
                                </div>
                            ))}
                            </div>
                            <div className="container-btn">
                                <button className="btn btn-lg btn-order-list" id="OrderList" onClick={() => deleteColeccion(order.id, order)}>Orden Lista</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Kitchen;