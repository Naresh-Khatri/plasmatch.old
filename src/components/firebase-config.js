
import firebase from 'firebase'
require('firebase/firestore')
var config = {
    apiKey: "AIzaSyDiONvRTCLl7Jci-hWHZxUKixa1bXXzFKE",
    authDomain: "plasmatch-6e7d8.firebaseapp.com",
    databaseURL: "https://plasmatch-6e7d8.firebaseio.com",
    projectId: "plasmatch-6e7d8",
    storageBucket: "plasmatch-6e7d8.appspot.com",
    messagingSenderId: "226894893291",
    appId: "1:226894893291:web:d431ef1dd9732eb0182eae",
    measurementId: "G-DH374VWNPS"
  };
  firebase.initializeApp(config)

const db = firebase.firestore();
export default db;