import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import "./kitchen.css"

const Cocina = () =>{
    
    const [ orderDetail, setOrderDetail] = useState([]);

    const getOrders = async () => {
        db.collection("Orders").onSnapshot((querySnapshot) => {
            const orders = []
            querySnapshot.forEach((doc) => {
                orders.push({...doc.data(), id:doc.id});
                console.log(doc.data());
            });
            setOrderDetail(orders);
        });
    };

    useEffect(() => {
        getOrders();
    }, []);

    console.log(orderDetail)
    return (
        <div>
            <div className="col-md-8">
                {orderDetail.map(order =>(
                    <div className="car mb-1">
                     <h3>{order.product.precio}</h3> 
                     {/* <h3></h3>
                     <h3></h3>
                     <h3></h3>    */}
                     </div>
                     ))}                
                
            </div>
        </div>
    )
}

export default Cocina