import React, { useState } from 'react';
import LunchMenu from './LunchMenu';


const LunchView = ({ item, cart, setCart, menu, sendSubTotal }) => {

  const { producto, precio, id } = item;
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState([]);


  //Funcion que agrega el producto a la Orden     
  const addProduct = id => {
    const item = menu.filter((item) => item.id === id);
    setCart([...cart, ...item])//... spread operator  o spread syntax trae las propiedades del objeto
  }

  //Funcion para Eliminar una producto de la Orden
  const deleteProduct = (id) => {
    const orderedProduct = cart.filter(item => item.id !== id);
    setCart(orderedProduct);
  }

//Multiplica el precio por la cantidad de productos
   const productSubTotal = precio * quantity;


  // //Multiplica el precio por la cantidad de productos
  // const addSubTotal = () => {
  //   const productSubTotal = precio * quantity;
  //   setSubTotal(productSubTotal)
  // }

  if(sendSubTotal){
    sendSubTotal(productSubTotal);
  }



  return (
    <div className='col-sm'>
      <ul>
        <li>{producto}</li>
        <li>${precio}</li>
        {menu ? (
          (
            <button type='button' onClick={() => addProduct(id)}>Agregar</button>
          )
        )
          : (
            <div>
              <div>
                <button onClick={() => setQuantity(quantity + 1)}>Sumar</button>
                {quantity > 0 ? (
                  <h3>{quantity}</h3>
                )
                  : (
                    <h3>{deleteProduct(id)}</h3>
                  )}
                <button onClick={() => setQuantity(quantity - 1)}>Restar</button>
              </div>
              <button type='button' onClick={() => deleteProduct(id)}>Eliminar</button>
              <p>SubTotal = {productSubTotal}</p>
            </div>
          )

        }

      </ul>
    </div>
  )
}
export default LunchView;
