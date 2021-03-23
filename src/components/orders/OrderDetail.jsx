import React, {useState} from 'react';
// import LunchMenu from './LunchMenu';
import LunchView from './LunchView';

const OrderDetail = ({cart, setCart}) => {
  
    //Sumar el total de los items
    const calcular = cart.map((item) => Math.floor(item.precio)); // Recorre el carrito y crea un nuevo array con los precios
    const add = calcular.reduce((a, b) => a + b, 0);



    console.log(cart,'cart')
    console.log(cart.length, 'lenght')
    return (
        <div className='ordersDetail col-sm'>
            <h4>Detalle de Orden</h4>
        {cart.length === 0 ? (<p>No hay roductos en el carrito</p>) : (cart.map((item => <LunchView key={item.id} item={item} cart={cart} setCart={setCart} />))) }

        <h1>Total {add} </h1>
        </div>
    )
}
export default OrderDetail;
