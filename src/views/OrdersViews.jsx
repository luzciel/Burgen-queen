import React from 'react'
import "../components/orders/Orders.css"
import MenuButtons from '../components/orders/MenuButtons'
import BreakfastMenu from '../components/orders/BreakfastMenu'
//import orders from '../components/orders/OrdersInputs'

const OrdersViews = () =>{
    return (
        <div>
            <MenuButtons/>

            <BreakfastMenu/>
        </div>

    )
}

export default OrdersViews