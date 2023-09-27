import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyDjvTIQ-qQQ1d9PJ9ocAxeIDHknWUAaGXQ",
    authDomain: "e-ride-stage-4-271de.firebaseapp.com",
    projectId: "e-ride-stage-4-271de",
    storageBucket: "e-ride-stage-4-271de.appspot.com",
    messagingSenderId: "94153173315",
    appId: "1:94153173315:web:dccc96481baeb19ffa27f6"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


