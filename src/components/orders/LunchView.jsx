import React, { useState } from 'react';
import LunchMenu from './LunchMenu';
import { Icon, InlineIcon } from '@iconify/react';
import delete24Regular from '@iconify/icons-fluent/delete-24-regular';
import less from '../../img/less.svg';
import circlePlus from '../../img/circlePlus.svg';



const LunchView = ({ itemIndex, item, cart, setCart, sendSubTotal }) => {

  const { producto, precio, id, cantidad } = item;

  const iconDelete = <Icon icon={delete24Regular} style={{ color: '#ff0b0b', fontSize: '25px' }} />;
  const iconCirclePlus =  <img src={circlePlus} alt='iconCirclePlus' className='quantity-icon'></img>;
  const iconLess = <img src={less} alt='iconLess' className='quantity-icon'></img>;

  //Funcion para Eliminar una producto de la Orden
  const deleteProduct = () => {
    const orderedProduct = cart.filter(item => item.id !== id);
    setCart(orderedProduct);
  }
   
  const incrementQuatity = () => {
    const incrementproduct = cart.map((item) => { 
      if(item.id === id){
        item.cantidad = item.cantidad + 1;
      } 
      return item

    })
    setCart(incrementproduct);
  }

  const descrementQuatity = () => {
    if(cantidad > 1) {
      const descrementProduct = cart.map((item) => { 
        if(item.id === id){
          item.cantidad = item.cantidad - 1;
        } 
        return item
      })
      setCart(descrementProduct);
   } else {
    deleteProduct()
   }
  }


  //Multiplica el precio por la cantidad de productos

  const productSubTotal = precio * quantity;


  // //Multiplica el precio por la cantidad de productos
  // const addSubTotal = () => {
  //   const productSubTotal = precio * quantity;
  //   setSubTotal(productSubTotal)
  // }



    //Sumar el total de los items
    const productPrices = cart.map((item) => Math.floor(item.precio) * quantity); // Recorre el carrito y crea un nuevo array con los precios (NUMBER)
    console.log('productPrices', productPrices)
    const grandTotal = productPrices.reduce((a, b) => a + b, 0); // reduce, toma todos los elementos en un array, y los reduce en un solo valor.
    
    console.log('grandTotal', grandTotal)


  if (sendSubTotal) {
    sendSubTotal(productSubTotal);
  }
  

  // const quantityOfProducts = () => {
  //   if(quantity > 0) {
  //     <h3>{quantity}</h3>
  //   } else {
  //     <h3>{deleteProduct(id)}</h3>
  //   }
  // }

  const productSubTotal = precio * cantidad;


  return (

    <tbody className=''>
      <tr>
        <th scope="row"><span onClick={() => deleteProduct()}>{iconDelete}</span></th>
        <td className='name-product' colSpan="2">{producto}</td>
        <td className='div-quantity'>
            <span><span onClick={incrementQuatity}>{iconCirclePlus}</span>
            <span className="quantity-number">{cantidad}</span>
            <span onClick={descrementQuatity}>{iconLess}</span></span>
          <p>SubTotal = {productSubTotal}</p>
        </td>
      </tr>
    </tbody>

  )
}
export default LunchView;
