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
    <div className='container menus'>
         <div className=' unicard card'>
          <h1 className='product-name' >{item.producto}</h1>
          {item.img} 
          <p className='product-price'>${item.precio}</p>
          <button type='button' className='additional-button-egg'>Huevo: 500</button>
          <button type='button' className='additional-button-cheese'>Queso: 500</button>
            {menu ? (
              (
                <button type='button' className="add-button" onClick={() => addProduct(id)}>+ Añadir</button>
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
      </div>
    </div>
  )
}
export default LunchView;