import firebase from 'firebase';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAJ-N61ScdA8PEsxFRONYK_pBfw2sxd3Lk",
    authDomain: "react-native-firebase-c91c0.firebaseapp.com",
    databaseURL: "https://react-native-firebase-c91c0.firebaseio.com",
    projectId: "react-native-firebase-c91c0",
    storageBucket: "react-native-firebase-c91c0.appspot.com",
    messagingSenderId: "836751827043",
    appId: "1:836751827043:web:d3455fb571e3496fd1d856"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
    firebase,
    db
  }