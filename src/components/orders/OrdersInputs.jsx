import React from 'react'
import "./Orders.css"

const OrdersInpunts = () =>{
    return (
        <div>
            <input type="text" className="clientName" placeholder="Nombre Cliente"/>
            <input type="text" className="waiterName" placeholder="Garzón" />
            <input type="number" className="tableNumber" placeholder="Mesa" />
            <hr className="hrOrders"></hr>
            
            
        </div>

    )
}

export default OrdersInpunts