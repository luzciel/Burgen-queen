import React, { useState } from 'react';
import LunchMenu from './LunchMenu';
import { Icon } from '@iconify/react';
import delete24Regular from '@iconify/icons-fluent/delete-24-regular';
import less from '../../img/less.svg';
import circlePlus from '../../img/circlePlus.svg';



const LunchView = ({item, cart, setCart}) => {

  const { producto, precio, id, cantidad,opcion, adicional} = item;
  console.log(adicional)
  const iconDelete = <Icon icon={delete24Regular} style={{ color: '#ff0b0b', fontSize: '25px' }} />;
  const iconCirclePlus =  <img src={circlePlus} alt='iconCirclePlus' className='quantity-icon'></img>;
  const iconLess = <img src={less} alt='iconLess' className='quantity-icon'></img>;

  //Funcion para Eliminar una producto de la Orden
  const deleteProduct = () => {
    const orderedProduct = cart.filter(item => item.id !== id); //devuelve todo  con exepcion del id que estoy clickeando
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
  const productSubTotal = precio * cantidad;
   
  //si el producto tiene adicional quiero que se muestren los adicionales (huevo-queso)
  const showAdditional = () => {
    if (item.adicional) {
      return adicional.map ((value,index) => (
        <div key={index} >
         {value.adicional}
        </div>
       ))
    }
  }

  //si el producto tiene opcion quiero que se muetre el producto + opcion, si no tiene opciones quiero que se muestre sólo producto
   const showOptions = () => {
     if (opcion){
       return producto + " " + opcion;
     }else{
       return producto;
     }
   }

  return (

    <tbody className=''>
      <tr>
        <th scope="row"><span onClick={() => deleteProduct()}>{iconDelete}</span></th>
        <td className='name-product' colSpan="2">
          {showOptions()}
          {showAdditional() }
        </td>
        
        <td className='div-quantity'>
            <span><span onClick={incrementQuatity}>{iconCirclePlus}</span>
            <span className="quantity-number">{cantidad}</span>
            <span onClick={descrementQuatity}>{iconLess}</span></span>
          {/* <p>SubTotal = {productSubTotal}</p> */}
        </td>
      </tr>
    </tbody>

  )
}
export default LunchView;
