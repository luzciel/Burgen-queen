import React, { Fragment } from 'react'
import "./Orders.css";
import MenuButtons from './MenuButtons';
// import NumberTables from '../tables/NumberTable'

const OrdersInputs = (props) =>{
    return (
        <Fragment>
            <input type="text" className="clientName" placeholder="Nombre Cliente"/>
            <input type="text" className="waiterName" placeholder="Garzón" /> 
        </Fragment>


    )
}

export default OrdersInputs
