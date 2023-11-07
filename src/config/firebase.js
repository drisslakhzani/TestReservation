import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6WDvqwzEJyLKCtUfdqKU1AbazDiS6EUE",
  authDomain: "basics-fire-base.firebaseapp.com",
  projectId: "basics-fire-base",
  storageBucket: "basics-fire-base.appspot.com",
  messagingSenderId: "29340627797",
  appId: "1:29340627797:web:a7a96351d259aa4789f5dc",
  measurementId: "G-HYFQD951JD"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth(app) 
export const database=getFirestore(app)