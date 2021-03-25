import React, { useState } from 'react';
// import LunchMenu from './LunchMenu';
import LunchView from './LunchView';
import SendKitchen from './SendKitchen';
import { db } from '../../firebase'
import './OrderDetail.css'

const OrderDetail = ({ cart, setCart }) => {

  //Sumar el total de los items
  const productPrices = cart.map((item) => Math.floor(item.precio)); // Recorre el carrito y crea un nuevo array con los precios (NUMBER)
  const grandTotal = productPrices.reduce((a, b) => a + b, 0); // reduce, toma todos los elementos en un array, y los reduce en un solo valor.

  const getSubTotal = (subTotal) => {
    console.log("HELLOOOOOOO", subTotal)
  }

  //Funcion que detalla el contenido de la orden si esta tiene un lenght diferente a 0
  const listLunchView = () => {
    if (cart.length === 0) {
      return <p className='empty-cart'>Agrega productos a la orden</p>;
    } else {
      return cart.map(((item, index) => <LunchView key={index + "menu"} item={item} cart={cart} setCart={setCart} sendSubTotal={getSubTotal} />))
    }
  }

  const addCollectionOrders = async (product) => {
    await db.collection('orders').doc().set(product)
    console.log("NEW COLECTION")
  }

  return (
    <div className='orders-detail col-sm'>
      <h4 className='orders-detail-title'>Detalles</h4>
      <table class="table">
        <thead>
        </thead>
      {listLunchView()}
      </table>
      <div className="div-total">
      <h1 className="total">Total</h1>
      <h1 className="total">${grandTotal}</h1>
      </div>
      <div className="div-btn">
        <a href='/cocina'><button type="button" class="btn btn-lg btn-send">Enviar a cocina</button></a>
        <a href='/'><button type="button" class="btn btn-lg btn-cancel">Cancelar Pedido</button></a>
      </div>
    </div>
  )
}
export default OrderDetail;
