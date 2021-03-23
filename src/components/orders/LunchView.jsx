import React, {useState} from 'react';
import LunchMenu from './LunchMenu';


const LunchView = ({item, cart, setCart, menu}) => {

    const {producto, precio, id} = item

        //Funcion que agrega el producto a la Orden     
        const addProduct = id => {
            console.log(id, 77777)
            const item = menu.filter((item) => item.id === id);
            setCart([...cart, ...item])
        }


    return (
        <div className='col-sm'>
            <ul>
                <li>{producto}</li>
                <li>${precio}</li>
                <li>{id}</li>
                <button type='button' onClick={() => addProduct(id)}>Agregar</button>
            </ul>
  
        </div>
    )
}
export default LunchView;
