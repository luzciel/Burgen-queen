import React, { Fragment,useState} from 'react'
import "./Orders.css";
import MenuButtons from './MenuButtons';
// import NumberTables from '../tables/NumberTable'



const OrdersInputs = ({clientName, setClientName, waiterName, setWaiterName}) =>{
     
    

    return (
        <Fragment>
            <input type="text" className="clientName" placeholder="Nombre Cliente" 
            value={clientName} onChange={(e)=> setClientName(e.target.value) }/>

            <input type="text" className="waiterName" placeholder="Garzón" 
            value={waiterName} onChange={(e)=>setWaiterName(e.target.value)} />
        </Fragment>


    )
}

export default OrdersInputs
