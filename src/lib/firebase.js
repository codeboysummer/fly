// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvMiNL20EVfcMtwCdgtTFp5p3Kx2JPm48",
  authDomain: "ticket-tracker-ff0a6.firebaseapp.com",
  projectId: "ticket-tracker-ff0a6",
  storageBucket: "ticket-tracker-ff0a6.appspot.com",
  messagingSenderId: "843627551902",
  appId: "1:843627551902:web:fee6367811fe7b4e97af8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
