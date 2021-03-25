import React, { useState } from 'react';
import LunchMenu from './LunchMenu';
import { Icon, InlineIcon } from '@iconify/react';
import delete24Regular from '@iconify/icons-fluent/delete-24-regular';
import circlePlus from '@iconify/icons-akar-icons/circle-plus';
import less from '../../img/less.svg'



const LunchView = ({ item, cart, setCart, menu, sendSubTotal }) => {

  const { producto, precio, id } = item;
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState([]);
  const iconDelete = <Icon icon={delete24Regular} style={{ color: '#ff0b0b', fontSize: '25px' }} />;
  const iconCirclePlus = <Icon icon={circlePlus} style={{ fontSize: '31.722944259643555px' }} className='quantity-icon' />;
  const iconLess = <img src={less} alt='tableOne' className='quantity-icon'></img>;


  // console.log(11, 'item', item)
  // console.log(2, 'cart', cart )
  // console.log(3, 'setCart', setCart)
  // console.log(4, 'menu', menu)
  // console.log(5, 'sendSubTotal', sendSubTotal )


  //Funcion que agrega el producto a la Orden     
  const addProduct = id => {
    const items = menu.filter((item) => item.id === id);
    setCart([...cart, ...items])
  }

  //Funcion para Eliminar una producto de la Orden
  const deleteProduct = (id) => {
    const orderedProduct = cart.filter(item => item.id !== id);
    setCart(orderedProduct);
    console.log('Elimine', id)
  }

  //Multiplica el precio por la cantidad de productos
  const productSubTotal = precio * quantity;


  // //Multiplica el precio por la cantidad de productos
  // const addSubTotal = () => {
  //   const productSubTotal = precio * quantity;
  //   setSubTotal(productSubTotal)
  // }

  if (sendSubTotal) {
    sendSubTotal(productSubTotal);
  }


  const incrementQuatity = () => {
    setQuantity(quantity + 1)
  }
  const descrementQuatity = () => {
    setQuantity(quantity + -1)
  }

  // const quantityOfProducts = () => {
  //   if(quantity > 0) {
  //     <h3>{quantity}</h3>
  //   } else {
  //     <h3>{deleteProduct(id)}</h3>
  //   }
  // }

  return (

    <tbody className=''>
      <tr>
        <th scope="row"><span onClick={() => deleteProduct(id)}>{iconDelete}</span></th>
        <td className='name-product' colspan="2">{producto}</td>
        <td>   </td>
        <td>
            <span><span onClick={incrementQuatity}>{iconCirclePlus}</span>
              {quantity > 0 ? (
                <span className="quantity-number">{quantity}</span>
              )
                : (
                  <span>{deleteProduct(id)}</span>
                )}
              <span onClick={descrementQuatity}>{iconLess}</span></span>
          {/* <p>SubTotal = {productSubTotal}</p> */}
        </td>
      </tr>
    </tbody>

  )
}
export default LunchView;
