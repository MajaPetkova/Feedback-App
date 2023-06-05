// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNQukGbHDBgLne-fNGmikt1ub0HY6TGHA",
  authDomain: "house-marketplace-app-b38ab.firebaseapp.com",
  projectId: "house-marketplace-app-b38ab",
  storageBucket: "house-marketplace-app-b38ab.appspot.com",
  messagingSenderId: "1071032006502",
  appId: "1:1071032006502:web:f93263d838f57126347aa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore();