import React from 'react'
import "../components/orders/Orders.css"
import OrdersInpunts from '../components/orders/OrdersInputs'
import MenuButtons from '../components/orders/MenuButtons'
import BreakfastMenu from '../components/orders/BreakfastMenu'
import LunchMenu from '../components/orders/LunchMenu'

const OrdersViews = () =>{
    return (
        <div>
            <OrdersInpunts/>

            <MenuButtons/>

            <BreakfastMenu/>
            
            <LunchMenu/>
            
        </div>

    )
}

export default OrdersViews