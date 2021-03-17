import React from 'react'
import Header from './Header.jsx'
import "./home.css"
import { Link } from "react-router-dom";

const Home = () =>{
    return (
      <div class='home-body'>
          <p>HOLAAAAAAAAA</p>
            <div class='opcion'>
             <Link to='mesas'><span class='opcion-tables span'>Mesas</span></Link>
             <Link to='/cocina'><span class='opcion-kitchen span'>Cocina</span></Link>
            </div>
      </div>
    )
}

export default Home