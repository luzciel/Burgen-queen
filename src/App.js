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
import Home from './components/home/Home';
import Mesas from './components/tables/Tables';
import Ordenes from './components/ordens/Ordens';
import Cocina from './components/kitchen/Kitchen';


function App() {
  const app = firebase.app();
  console.log(app);
  return (
    <Router>
    <div className="container">
     <div>
       <NavLink to='/' activeClassName='active'>
         Home
       </NavLink>
       <NavLink to='/mesas' activeClassName='active'>
         Mesas
       </NavLink>
       <NavLink to='/cocina' activeClassName='active'>
         Cocina
       </NavLink>
     </div>
      <hr/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/mesas">
          <Mesas />
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
