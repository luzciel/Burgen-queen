import React from 'react'
import tableOne from '../../img/mesa 1 grupo.png'
import tableTwo from '../../img/mesa 2 grupo.png'
import tableThree from '../../img/mesa 3 grupo.png'
import tableFour from '../../img/mesa 4 grupo.png'
import tableFive from '../../img/mesa 5 grupo.png'
import tableSix from '../../img/mesa 6 grupo.png'
import {Link} from "react-router-dom";

const NumberTable = () => {
    return (
        <div className='tables col-sm'>
            <Link to='/orders/1'><img src={tableOne} alt='tableOne' className='number-table one'></img></Link>
            <Link to='/orders/2'><img src={tableTwo} alt='tableTwo' className='number-table two'></img></Link>
            <Link to='/orders/3'><img src={tableThree} alt='tableThree' className='number-table three'></img></Link>
            <Link to='/orders/4'><img src={tableFour} alt='tableFour' className='number-table four'></img></Link>
            <Link to='/orders/5'><img src={tableFive} alt='tableFive' className='number-table five'></img></Link>
            <Link to='/orders/6'><img src={tableSix} alt='tableSix' className='number-table six'></img></Link>
        </div>
    )
}
export default NumberTable;