import React, { useEffect, useState, Fragment } from 'react';
import { db } from '../../firebase.js';

const OrdersDataBase = () => {

    const [ dataBase, setDataBase] = useState([]);

    // Recupera la coleccion ordersDataBase de firebase
    const getOrdersDataBase = async () => {
        try {
            await db.collection("OrdersDataBase").onSnapshot((querySnapshot) => {
                const orders = []
                querySnapshot.forEach((doc) => {
                    orders.push({ ...doc.data(), id: doc.id });
                });
                setDataBase(orders); // actualiza orders agregando el id del Documento de firebase
            });
        } catch (error) {
            console.log('Error:', error)
        }
    };

    useEffect(() => {
        getOrdersDataBase();
    }, []);


    return (
        <Fragment>
            <div className="orders-body">
                <h1>Resumen de pedidos:</h1>
                <div className="container-orders">
                    {dataBase.map(order => (
                        <div className="col-sm kitchen" key={order.id}>
                            <div className="container-name">
                                <h3>{order.orders.orderCompleted.clientName}</h3>
                            </div>
                            <div className="container-detail-order">
                            <div className="container-table-waiter">
                                    <h5><strong>Mesa:</strong> {order.orders.orderCompleted.tableNumber}</h5>
                                    <h5><strong>Garzon:</strong> {order.orders.orderCompleted.waiterName}</h5>
                                </div>
                                <h5> <strong>Entrada:</strong> {order.orders.orderCompleted.dateOrder}</h5>
                                <h5> <strong>Salida:</strong> {order.orders.dateEnd}</h5>
                                <hr />
                            </div>
                            <div className="container-product">{order.orders.orderCompleted.product.map(item => (
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
                                <button className="btn btn-lg btn-order-serve" id="OrderList">Borrar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default OrdersDataBase;