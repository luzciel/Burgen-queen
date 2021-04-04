import React, {useEffect, useState} from 'react';
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
        <div>
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
        </div>
    )
}

export default Serve