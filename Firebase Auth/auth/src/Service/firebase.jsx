// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACRzjhndx2UYeOYblNXTbDMYTKmxsRCgI",
  authDomain: "auth-e1dbb.firebaseapp.com",
  projectId: "auth-e1dbb",
  storageBucket: "auth-e1dbb.appspot.com",
  messagingSenderId: "755614069803",
  appId: "1:755614069803:web:a6251e3ef370cea78b666e",
  measurementId: "G-3LP177NJD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider = new GoogleAuthProvider(app);

