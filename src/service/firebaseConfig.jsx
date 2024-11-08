
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"


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