import React, {useEffect, useState, Fragment} from 'react';
import {db} from '../../firebase.js';

const Serve = () => {
    const [ serveOrder, setServeOrder] = useState([]);

    // Recupera la coleccion Orders de firebase
    const getReadyOrders = async () => {
        try {
            await db.collection("readyOrders").onSnapshot((querySnapshot) => {
                const orders = []
                querySnapshot.forEach((doc) => {
                    orders.push({...doc.data(), id:doc.id});
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

    console.log(serveOrder)

    return (
        <Fragment>

        {/* <div>
            <div className="col-md-8">
                {serveOrder.map(order =>(
                    <div className="car mb-1" key={order.id}>
                     <h1>{order.id}</h1> 
                     <div>{order.orderCompleted.product.map(item => (
                          <div className="" key={item.id}>
                          <p>{item.producto}</p>
                          <p>{item.cantidad}</p>
                          <p>{item.extra}</p>
                          <p>{item.extra}</p>
                          <p>{item.opcion}</p>
                          <hr/>
                          </div>
                     ))}</div> 
                     <button id="OrderList">Orden Lista</button>
                     </div>
                     ))}                
            </div>
        </div> */}
            <Fragment>
            <div className="orders-body">
                <h1>Entregar pedido:</h1>
                <div className="container-orders">
                    {serveOrder.map(order => (
                        <div className="col-sm kitchen" key={order.id}>
                            <div className="container-name">
                                <h3>NOMBRE</h3>
                            </div>
                            <div className="container-detail-order">
                                <div className="container-table-waiter">
                                    <h5> <strong>Mesa:</strong> 5</h5>
                                    <h5><strong>Garzon:</strong> Veronica</h5>
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
                                <button className="btn btn-lg btn-order-serve" id="OrderList">Entregado</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
        </Fragment>
    )
}

export default Serve