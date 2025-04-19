import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8ABfj6VJtn7tiGNrIJ8HBIobdOGzoP68",
  authDomain: "prepmeleon.firebaseapp.com",
  projectId: "prepmeleon",
  storageBucket: "prepmeleon.firebasestorage.app",
  messagingSenderId: "766191997701",
  appId: "1:766191997701:web:4142a17d399e968f979d6c",
  measurementId: "G-DT3LC937XV",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
