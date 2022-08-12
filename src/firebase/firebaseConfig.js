import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7J9XNfVPHjpI0Y5J0gq4i_G3V4POamA8",
  authDomain: "frontend12-e1a6f.firebaseapp.com",
  projectId: "frontend12-e1a6f",
  storageBucket: "frontend12-e1a6f.appspot.com",
  messagingSenderId: "597510365575",
  appId: "1:597510365575:web:2fdd81928f875d89237322"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const google = new GoogleAuthProvider()
 export const DB = getFirestore()

 export default app