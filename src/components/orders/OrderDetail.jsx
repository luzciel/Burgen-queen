import React, {useState} from 'react';
// import LunchMenu from './LunchMenu';
import LunchView from './LunchView';
import SendKitchen from './SendKitchen';
import {db} from '../../firebase'

const OrderDetail = ({cart, setCart}) => {
  
    //Sumar el total de los items
    const productPrices = cart.map((item) => Math.floor(item.precio)); // Recorre el carrito y crea un nuevo array con los precios (NUMBER)
    const grandTotal = productPrices.reduce((a, b) => a + b, 0);

    const getSubTotal = (subTotal) => {
        console.log("HELLOOOOOOO", subTotal)
    }
    
    //Funcion que detalla el contenido de la orden si esta tiene un lenght diferente a 0
    const listLunchView = () => {
        if(cart.length === 0) {
            return <p>No hay productos en el carrito</p>;
        } else {
            return cart.map((item => <LunchView key={item.id} item={item} cart={cart} setCart={setCart} sendSubTotal={getSubTotal} />))
        }
    }

    const addCollectionOrders = async (product) =>{
        await db.collection('orders').doc().set(product)
        console.log("NEW COLECTION")
    }

    return (
        <div className='ordersDetail col-sm'>
            <h4>Detalle de Orden</h4>
            {listLunchView()}
            <h1>Total {grandTotal} </h1>       
            <SendKitchen/>
        </div>
    )
}
export default OrderDetail;
