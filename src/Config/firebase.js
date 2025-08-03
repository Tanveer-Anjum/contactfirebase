// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJnMO21ckiza-bh4YYPnn19YelX-rjZts",
  authDomain: "contect-app-5562e.firebaseapp.com",
  projectId: "contect-app-5562e",
  storageBucket: "contect-app-5562e.firebasestorage.app",
  messagingSenderId: "290735312007",
  appId: "1:290735312007:web:db24766b531c3eb14cfc22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);