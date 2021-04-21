import React, { useEffect, useState, Fragment } from 'react';
import { db } from '../../firebase.js';

const Serve = () => {
    const [serveOrder, setServeOrder] = useState([]);

    // Recupera la coleccion ReadyOrders de firebase
    const getReadyOrders = async () => {
        try {
            await db.collection("readyOrders").orderBy("dateEnd", "asc").onSnapshot((querySnapshot) => {
                const orders = []
                querySnapshot.forEach((doc) => {
                    orders.push({ ...doc.data(), id: doc.id });
                });
                setServeOrder(orders); // actualiza orders agregando el id del Documento de firebase
            });
        } catch (error) {
            console.log('Error:', error)
        }
    };

    useEffect(() => {
        getReadyOrders();
    }, []);

    //Agrega coleccion addOrdersDataBase a firebase
    const addOrdersDataBase = async (order) => {
        try {
            const docRef = await db.collection('OrdersDataBase').add({
                orders: order,
            })
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

     //Elimina el documento de Coleccion Orders (Cocina)
     const deleteColeccion = async (id, order) => {
        try {
            await db.collection('readyOrders').doc(id).delete()
        } catch (error) {
            console.error('Error deleting document:', error)
        }
        addOrdersDataBase(order); // LLama a readyOrders el cual Agrega coleccion readyOrders a firebase
    }



    return (
        <Fragment>
            <div className="orders-body">
                <h1>Entregar pedido:</h1>
                <div className="container-orders">
                    {serveOrder.map(order => (
                        <div className="col-sm kitchen" key={order.id}>
                            <div className="container-name">
                            <h3>{order.orderCompleted.clientName}</h3>
                            </div>
                            <div className="container-detail-order">
                                <div className="container-table-waiter">
                                    <h5><strong>Mesa:</strong> {order.orderCompleted.tableNumber}</h5>
                                    <h5><strong>Garzon:</strong> {order.orderCompleted.waiterName}</h5>
                                </div>
                                <h5> <strong>Salida:</strong> {order.dateEnd}</h5>
                                <hr />
                            </div>
                            <div className="container-product">{order.orderCompleted.product.map(item => (
                                <div className="container-product-item">
                                    <div class="container" key={item.id}>
                                        <div class="row">
                                            <div class="col">
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
                                        <div class="col">
                                            <p className="price">{item.cantidad}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                            </div>
                            <div className="container-btn">
                                <button className="btn btn-lg btn-order-serve" id="OrderList" onClick={() => deleteColeccion(order.id, order)}>Entregado</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Serve