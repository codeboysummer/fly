// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getFirestore(app);
const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export { db, auth };
