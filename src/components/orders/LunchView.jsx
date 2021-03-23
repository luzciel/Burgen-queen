import React, {useState} from 'react';
import LunchMenu from './LunchMenu';


const LunchView = ({item, cart, setCart, menu}) => {

    const {producto, precio, id} = item

        //Funcion que agrega el producto a la Orden     
        const addProduct = id => {
            const item = menu.filter((item) => item.id === id);
            setCart([...cart, ...item])
        }

        //Funcion para Eliminar una producto de la Orden
        const deleteProduct = (id) => {
          const orderedProduct = cart.filter(item => item.id !== id)
          setCart(orderedProduct)
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
                    <button type='button' onClick={() => addProduct(id)}>Confirmar</button>
                    <button type='button' onClick={() => deleteProduct(id)}>Eliminar</button>
                  </div>
                )
              
              }
                
            </ul>
        </div>
    )
}
export default LunchView;
