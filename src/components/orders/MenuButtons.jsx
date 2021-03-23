import React from 'react'
import "./Orders.css"
import BreakfastMenu from './BreakfastMenu'

const MenuButtons = (props) =>{

    const BreakfastData = () =>{
        console.log('soy el boton data DESAYUNO')
    }
    
    const lunchData = () =>{
        console.log('soy el boton  data ALMUERZO')
    }

    return (
    
        <div>
         <button type="button" className="btnBreakfast" onClick={()=>{props.breakfastClick()}} >{props.btnDesayuno} </button> 
         <button type="button"className="btnLunch" onClick={()=>{props.lunchClick()}} >Almuerzo</button>          
        </div>
    )

}

export default MenuButtons