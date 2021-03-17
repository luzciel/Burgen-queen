import React from 'react'
import tableOne from '../../img/mesa 1 grupo.png'

const NumberTable = () => {
    console.log("Number Tables")
    return (
        <div>
            <img src={tableOne} alt='tableOne' class='number-table one'></img>
            <img src={tableOne} alt='tableOne' class='number-table one'></img>
            <img src={tableOne} alt='tableOne' class='number-table one'></img>
            <img src={tableOne} alt='tableOne' class='number-table one'></img>
            <img src={tableOne} alt='tableOne' class='number-table one'></img>
            <img src={tableOne} alt='tableOne' class='number-table one'></img>
        </div>
    )
}
export default NumberTable;