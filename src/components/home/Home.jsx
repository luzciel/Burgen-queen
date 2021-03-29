import React from 'react'
import Header from './Header.jsx'
import "./home.css"
import { Link } from "react-router-dom";
import tables from '../../img/table.svg';
import kitchen from '../../img/kitchen.svg';



const Home = () => {
  return (
    <div class='home-body'>
      <div class='opcion'>
        <Link to='mesas'>
          <span class='opcion-tables span'>
            <img src={tables} alt='tables' className='tables-icon home-icon'></img>
                  Mesas</span>
        </Link>
        <Link to='/cocina'>
          <span class='opcion-kitchen span'>
            <img src={kitchen} alt='kitchen' className='kitchen-icon home-icon'></img>
                  Cocina</span>
        </Link>
      </div>
    </div>
  )
}

export default Home