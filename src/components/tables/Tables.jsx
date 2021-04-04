import React from 'react'
import NumberTable from './NumberTable'
import './tables.css'
import {Link} from "react-router-dom";

const Tables = () => {
    return (
        <div className='container-views-tables'>
           <div className='text-tables'>
            <h1 class ="textH1" >Elige una mesa</h1>
            <Link to='/cocina'><button type="button" class="btn btn-primary btn-lg to-go">Para Llevar</button></Link>
           </div>
            <div className='container-tables'>
                <NumberTable />
            </div>
        </div>
    )
}
export default Tables;