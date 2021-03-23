import React, {useState} from 'react';
// import LunchMenu from './LunchMenu';
import LunchView from './LunchView';

const OrderDetail = ({cart, setCart}) => {

    // const [cart, setCart] = useState ([])
console.log('aQuiiiii')

    return (
        <div className='ordersDetail col-sm'>
            <h4>Detalle de Orden</h4>
        {cart.lenght === 0 ? (<p>CERO</p>) : (cart.map((item => <LunchView key={item.id} item={item} cart={cart} setCart={setCart} />))) }
        </div>
    )
}
export default OrderDetail;
