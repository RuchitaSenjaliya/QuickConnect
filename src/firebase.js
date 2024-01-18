// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrzQbFJpoOhDh9otUK_cRZGMM6HlIManA",
  authDomain: "quickconnect-d31a7.firebaseapp.com",
  projectId: "quickconnect-d31a7",
  storageBucket: "quickconnect-d31a7.appspot.com",
  messagingSenderId: "330368249075",
  appId: "1:330368249075:web:280f77bfb4aa92cf0e5b86",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
