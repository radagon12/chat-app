// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCoZ8a0N1mPsO8XHe1vMpxaB0H7LxYvbKQ",
  authDomain: "chat-e4f0f.firebaseapp.com",
  projectId: "chat-e4f0f",
  storageBucket: "chat-e4f0f.appspot.com",
  messagingSenderId: "179034738622",
  appId: "1:179034738622:web:1990eac1d466e63117b3ef",
  measurementId: "G-QFP9Y3J9XN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();