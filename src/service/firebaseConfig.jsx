// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ZdnZE5zk53qyvOSPD_twt9-eqI0y1go",
  authDomain: "ai-trip-planner-32261.firebaseapp.com",
  projectId: "ai-trip-planner-32261",
  storageBucket: "ai-trip-planner-32261.appspot.com",
  messagingSenderId: "468600770063",
  appId: "1:468600770063:web:bfecdb943b57568f935d7a",
  measurementId: "G-VTNKXDX96D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)