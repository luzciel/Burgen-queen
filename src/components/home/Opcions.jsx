import React from 'react'
import { Link } from "react-router-dom";


const opcions = () =>{
    return (
        <div class='opcion'>
            <Link to='/tables'><span class='opcion-tables'>Mesas</span></Link>
            <Link to='/cocina'><span class='opcion-kitchen'>Cocina</span></Link>
        </div>
    )
}
export default opcions
