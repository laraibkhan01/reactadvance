import firebase from "firebase/app";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIRESEBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,

  apiKey: "AIzaSyDie41G2_rv9Dt8d3YZwj6bmY1u-GZJ2SI",
  authDomain: "auth-app-533e6.firebaseapp.com",
  projectId: "auth-app-533e6",
  storageBucket: "auth-app-533e6.appspot.com",
  messagingSenderId: "515906217872",
  appId: "1:515906217872:web:82123b665f29ec4a2e7515"
});

export default firebaseApp;
