// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
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

// login helper functions

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleAuthProvider);
    //toast({ title: "welcome to Fly ✈️", status: "success", duration: 1000 });
  } catch (error) {
    console.log(error);
  }
};

export const loginWithCredentials = async (
  email: string,
  password: string,
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};
export const CreateAccountWithCredentials = async (
  email: string,
  password: string,
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};


export const storeUser = async (name:string,email:string,password:string) => {



  
}
