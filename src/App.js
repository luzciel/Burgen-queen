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
import OrdersInputs from './components/orders/OrdersInputs.jsx';
import Kitchen from './components/kitchen/Kitchen.jsx';
import Header from './components/home/Header.jsx';
import HomeViews from './views/HomeViews';
import OrdersViews from './views/OrdersViews';
import "./components/home/home.css";
import Serve from './components/serve/Serve';
import OrdersDataBase from './components/dataBase/OrdersDataBase';

function App() {
  const app = firebase.app();
  return (
    <Router>
    <div>
     <div>
      <Header />
     </div>
      <Switch>
        <Route path="/" exact>
          <HomeViews />
        </Route>
        <Route path="/mesas">
          <Tables />
        </Route>
        <Route path="/orders/:numTable"
        component={OrdersViews} />
        <Route path="/cocina">
          <Kitchen/>
        </Route>
        <Route path="/servir">
          <Serve/>
        </Route>
        <Route path="/boletas">
          <OrdersDataBase/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
