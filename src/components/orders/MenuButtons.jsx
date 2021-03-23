import React from 'react'
import "./Orders.css"
import BreakfastMenu from './BreakfastMenu'

const MenuButtons = () =>{

    < BreakfastMenu/> 

    const BreakfastData = () =>{

        console.log('soy el boton data desayuno')
    }
    
    const lunchData = () =>{
        console.log('soy el boton lunch data')
    }

    return (
    
        <div>
         <button type="button" className="btnBreakfast" onClick={()=>{BreakfastData()}} >Desayuno</button> 
         <button type="button"className="btnLunch" onClick={()=>{lunchData()}} >Almuerzo</button>          
        </div>
    )

}

export default MenuButtons