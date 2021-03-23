import React from 'react'
import "../components/orders/Orders.css"
// import OrdersInpunts from '../components/orders/OrdersInputs'
import MenuButtons from '../components/orders/MenuButtons'
import BreakfastMenu from '../components/orders/BreakfastMenu'
import OrdersInputs from '../components/orders/OrdersInputs'
//import orders from '../components/orders/OrdersInputs'
import LunchMenu from '../components/orders/LunchMenu'

const OrdersViews = (props) =>{
    console.log(props)
    return (
        <div className='container OrdersViews'>
            <OrdersInputs/>
            <input type="text" className="tableNumber" placeholder="Mesa" value={`Mesa ${props.match.params.numTable}`} />
            <hr className="hrOrders"></hr>
            
            <div className='container menuOrder'>
            <MenuButtons/>

            <BreakfastMenu/>
            
            <LunchMenu/>

            </div>
            
        </div>

    )
}

export default OrdersViews