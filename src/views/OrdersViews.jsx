import React from 'react'
import "../components/orders/Orders.css"
import OrdersInpunts from '../components/orders/OrdersInputs'
import MenuButtons from '../components/orders/MenuButtons'
import BreakfastMenu from '../components/orders/BreakfastMenu'

const OrdersViews = () =>{
    return (
        <div>
            <OrdersInpunts/>

            <MenuButtons/>

            <BreakfastMenu/>
            
        </div>

    )
}

export default OrdersViews