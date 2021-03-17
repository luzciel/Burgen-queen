// import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './firebase';
import firebase from "firebase/app";
import Home from './components/home/Home.jsx';
import Tables from './components/tables/Tables.jsx';
import Ordenes from './components/ordens/Ordens.jsx';
import Cocina from './components/kitchen/Kitchen.jsx';
import Header from './components/home/Header.jsx';
import "./components/home/home.css"

function App() {
  const app = firebase.app();
  console.log(app);
  return (
    <Router>
    <div>
     <div>
      <Header />
       {/* <NavLink to='/' activeClassName='active'>
         Home
       </NavLink>
       <NavLink to="/mesas" >Mesas</NavLink>
       <NavLink to='/cocina' activeClassName='active'>
         Cocina
       </NavLink> */}
     </div>
      {/* <hr/> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/mesas">
          <Tables />
        </Route>
        <Route path="/ordenes">
          <Ordenes />
        </Route>
        <Route path="/cocina">
          <Cocina />
        </Route>
        <Route path="/servir">
          servir
        </Route>
        <Route path="/boletas">
          Boletas
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
