import React from 'react'
import "./ordersInputs.css"
const orders = () =>{
    return (
        <div>
            <input type="text" className="clientName" placeholder="Nombre Cliente"/>
            <input type="text" className="waiterName" placeholder="Garzón" />
            <input type="text" className="tableNumber" placeholder="Mesa" />
        </div>
    )
}

export default orders