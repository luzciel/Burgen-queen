import React, { useState } from 'react';
// import LunchMenu from './LunchMenu';
import LunchView from './LunchView';
import { db } from '../../firebase';
import './OrderDetail.css';

const OrderDetail = ({ cart, setCart, addCollectionOrders}) => {

  //Sumar el total de los items. Recorre el carrito y crea un nuevo array con los precios (NUMBER)
  const productPrices = cart.map((item) => {
    if (item.adicional) {
      return (Math.floor(item.precio) + (item.adicional.length * 300)) * item.cantidad; 
      
    } else{
        return Math.floor(item.precio) * item.cantidad;
      }
    })

  // reduce, toma todos los elementos en un array, y los reduce en un solo valor.
  const grandTotal = productPrices.reduce((a, b) => a + b, 0); 

  //Funcion para detallar el contenido de la orden si esta tiene un lenght diferente a 0
  const listLunchView = () => {
    if (cart.length === 0) {
      return <p className='empty-cart'>Agrega productos a la orden</p>;
    } else {
      return cart.map(((item, index) => <LunchView key={index + "menu"} itemIndex={index} item={item} cart={cart} setCart={setCart}/>))
    }
  }

  //Esta funcion se va activar al darle click al boton enviar
  const handleSendOrder = () => {
    addCollectionOrders(cart)
    console.log("enviar a firebase")

  }

  return (
    <div className='orders-detail col-sm'>
      <h4 className='orders-detail-title'>Detalle de la orden:</h4>
      <table class="table">
        <thead>
        </thead>
      {listLunchView()}
      </table>
      <div className="div-total">
      <h1 className="total">Total:</h1>
      <h1 className="total">${grandTotal}</h1>
      </div>
      <div className="div-btn">
        <button type="button" class="btn btn-lg btn-send" onClick={() => handleSendOrder()}>Enviar</button>
        <a href='/'><button type="button" class="btn btn-lg btn-cancel">Cancelar</button></a>
      </div>
    </div>
  )
}
export default OrderDetail;
