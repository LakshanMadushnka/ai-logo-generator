// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "netflix-clone-18e4b.firebaseapp.com",
  projectId: "netflix-clone-18e4b",
  storageBucket: "netflix-clone-18e4b.firebasestorage.app",
  messagingSenderId: "289802196320",
  appId: "1:289802196320:web:0bffec4b67d6d76a1eba05",
  measurementId: "G-3F7C208SZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getAnalytics(app);