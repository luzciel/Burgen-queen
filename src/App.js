//import './App.css';
import React from 'react';
import './firebase';
import firebase from "firebase/app";


function App() {
  const app = firebase.app();
  console.log(app);
  return (
    <div className="containe">
      <h1>todo ok...</h1>
    </div>
  );
}

export default App;
