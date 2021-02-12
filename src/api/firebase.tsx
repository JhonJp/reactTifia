import firebase from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/firebase-auth';

const firebaseConfig = {
    apiKey: "AIzaSyClGNBiEveA6rCXe0zea1eBFGFrfV6tjXQ",
    authDomain: "tifia-380f5.firebaseapp.com",
    databaseURL: "https://tifia-380f5-default-rtdb.firebaseio.com",
    projectId: "tifia-380f5",
    storageBucket: "tifia-380f5.appspot.com",
    messagingSenderId: "569266512235",
    appId: "1:569266512235:web:16a086d40c51ef5ff42c2e",
    measurementId: "G-2FWM40PDSZ"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 

export default fire;