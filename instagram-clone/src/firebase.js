

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRoXdhtfgciu_fxjjmVjYN43yVpIadeGU",
    authDomain: "instagram-clone-c9694.firebaseapp.com",
    projectId: "instagram-clone-c9694",
    storageBucket: "instagram-clone-c9694.appspot.com",
    messagingSenderId: "840904915099",
    appId: "1:840904915099:web:06600c1bb051b5a4e9ee3e",
    measurementId: "G-Z5669WSMMQ"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage};
