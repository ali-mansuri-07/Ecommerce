import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBIGy05rmZh3zY3FsEEDGhfPO_IWIAg9zY",
    authDomain: "ecommerce-4dc78.firebaseapp.com",
    projectId: "ecommerce-4dc78",
    storageBucket: "ecommerce-4dc78.appspot.com",
    messagingSenderId: "584451532534",
    appId: "1:584451532534:web:ddf6de2e39599227a96ed7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();