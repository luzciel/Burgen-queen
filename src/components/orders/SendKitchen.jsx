import React, {useState} from 'react';
import {db} from '../../firebase'

const SendKitchen = () => {

    const addCollectionOrders = async (product) =>{
        await db.collection('orders').doc().set(product)
        console.log("NEW COLECTION")
    }

    return (

    <div>
        <button type="button" class="btn btn-primary btn-sm">Enviar a cocina</button>
        <button type="button" class="btn btn-primary btn-sm">Cancelar Pedido</button>
    </div>
    )

}

export default SendKitchen;