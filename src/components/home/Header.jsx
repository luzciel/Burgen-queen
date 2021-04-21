import React from 'react'
import { NavLink } from "react-router-dom";
// import "./home.css"
import Logo from '../../img/logo.png'
import App from '../../App'

const Header = () => {
    return (
        <section id="particles-js" className="section home">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <img src={Logo} id="log" />
                <div className="col-md-10 col-12 mx-auto">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ml-auto pr-4 list">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Inicio </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/mesas">Mesas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/cocina' className="nav-link">Cocina</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/servir' className="nav-link">Servir</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/boletas' className="nav-link">Boletas</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    )
}

export default Header