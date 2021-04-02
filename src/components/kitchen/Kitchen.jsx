import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import "./kitchen.css"

const Cocina = () =>{
    
    const [ orderDetail, setOrderDetail] = useState([]);

    // Recupera la coleccion Orders de firebase
    const getOrders = async () => {
        try {
            await db.collection("Orders").onSnapshot((querySnapshot) => {
                const orders = []
                querySnapshot.forEach((doc) => {
                    orders.push({...doc.data(), id:doc.id});
                    console.log(doc.data());
                });
                setOrderDetail(orders);
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
        try {
          const docRef = await db.collection('readyOrders').add({
              dateEnd: new Date(),
              orderCompleted: order,
            })
          console.log("COLECTION lista")
        } catch (error) {
          console.error("Error adding document: ", error);
        }
    
      };

    //Elimina el documento de Coleccion Orders (Cocina)
    const deleteColeccion = async(id, order) => {
        try {
            await db.collection('Orders').doc(id).delete()
            console.log("eliminar", id )
        } catch (error) {
            console.error('Error deleting document:', error )
        }
        readyOrders(order);

    }



    console.log(orderDetail)
    return (
        <div>
            <div className="col-md-8">
                {orderDetail.map(order =>(
                    <div className="car mb-1" key={order.id}>
                     <h1>NOMBRE</h1> 
                     <div>{order.product.map(item => (
                          <div className="" key={item.id}>
                          <p>{item.producto}</p>
                          <p>{item.cantidad}</p>
                          <p>{item.extra}</p>
                          <p>{item.extra}</p>
                          <p>{item.opcion}</p>
                          <hr/>
                          </div>
                     ))}</div> 
                     {/* <h3></h3>
                     <h3></h3>
                     <h3></h3>    */}
                     <button id="OrderList" onClick={ () => deleteColeccion(order.id, order)}>Orden Lista</button>
                     </div>
                     ))}                
            </div>
        </div>
    )
}

export default Cocina