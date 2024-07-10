
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1RDs3j5RqJPCHdt06X3Px-YBuiBFM4FU",
  authDomain: "auth-8aea0.firebaseapp.com",
  projectId: "auth-8aea0",
  storageBucket: "auth-8aea0.appspot.com",
  messagingSenderId: "384174305274",
  appId: "1:384174305274:web:b320d1b866d321c53ffe43",
  measurementId: "G-9CG15QLL3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
 export const provider = new GoogleAuthProvider();