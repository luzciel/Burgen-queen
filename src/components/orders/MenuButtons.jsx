import React from 'react'
import "./Orders.css"
import BreakfastMenu from './BreakfastMenu'

const MenuButtons = (props) =>{

    return (
    
        <div>
         <button type="button" className="btnBreakfast" onClick={()=>{props.breakfastClick()}} >{props.btnDesayuno} </button> 
         <button type="button"className="btnLunch" onClick={()=>{props.lunchClick()}} >Almuerzo</button>          
        </div>
    )

}

export default MenuButtons