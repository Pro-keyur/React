// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_z8O0srr9U1xuIyZ2OJoOaC8L2NaUsQs",
  authDomain: "firestore-f9168.firebaseapp.com",
  projectId: "firestore-f9168",
  storageBucket: "firestore-f9168.appspot.com",
  messagingSenderId: "620065160448",
  appId: "1:620065160448:web:6d1fabeca11e90784c87e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firestore data base
export const db = getFirestore(app);
