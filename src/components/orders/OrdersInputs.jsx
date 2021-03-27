import React from 'react'
import "./Orders.css"
import MenuButtons from './MenuButtons'
// import NumberTables from '../tables/NumberTable'

const OrdersInputs = (props) =>{
    return (
        <div className="inputsContainer">
            <input type="text" className="clientName" placeholder="Nombre Cliente"/>
            <input type="text" className="waiterName" placeholder="Garzón" />
            {/* <input type="text" className="tableNumber" placeholder="Mesa" value={`Mesa ${props.match.params.numTable}`} />
            <hr className="hrOrders"></hr> */}            
        </div>

    )
}

export default OrdersInputs
