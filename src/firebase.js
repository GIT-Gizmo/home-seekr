// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyy21h1bVMs4adTi1bTFQGs4-xpadiJVk",
  authDomain: "homeseekr-3e434.firebaseapp.com",
  projectId: "homeseekr-3e434",
  storageBucket: "homeseekr-3e434.appspot.com",
  messagingSenderId: "430149742077",
  appId: "1:430149742077:web:a334007a5d7bd6c2f83d94"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()