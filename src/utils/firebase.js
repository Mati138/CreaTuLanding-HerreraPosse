// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoQ_lvzwxeOSniJRtFjt5jukoNNi83c04",
  authDomain: "proyectofinal-coderhouse-797be.firebaseapp.com",
  projectId: "proyectofinal-coderhouse-797be",
  storageBucket: "proyectofinal-coderhouse-797be.firebasestorage.app",
  messagingSenderId: "988481099086",
  appId: "1:988481099086:web:15365024ac851ebfd0fa1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)