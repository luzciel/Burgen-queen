import React from 'react';

const OrderColleccion = (orderDetail, setOrderDetail, order) => {


    return (
        <div className="">
            <h1>NOMBRE</h1>
            <div>{orderDetail.product.map(item => (
                <div className="" key={item.id}>
                    <p>{item.producto}</p>
                    <p>{item.cantidad}</p>
                    <p>{item.extra}</p>
                    <p>{item.extra}</p>
                    <p>{item.opcion}</p>
                    <hr />
                </div>
            ))}</div>
            <button>Orden Lista</button>
        </div>              
    
    )
}

export default OrderColleccion;
