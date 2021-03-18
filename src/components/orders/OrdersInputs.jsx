import React from 'react'
import "./Orders.css"
import MenuButtons from './MenuButtons'
const orders = () =>{
    return (
        <div>
            <input type="text" className="clientName" placeholder="Nombre Cliente"/>
            <input type="text" className="waiterName" placeholder="Garzón" />
            <input type="number" className="tableNumber" placeholder="Mesa" />
            <hr className="hrOrders"></hr>
            
            <MenuButtons/>
            
        </div>

    )
}

export default orders