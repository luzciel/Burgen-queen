import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAGXSbF4BWmw0d38n_5SWfLnO8dyoXe610",
    authDomain: "burgue-queen.firebaseapp.com",
    projectId: "burgue-queen",
    storageBucket: "burgue-queen.appspot.com",
    messagingSenderId: "578700722716",
    appId: "1:578700722716:web:5581b68200f416409a95d9"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();
