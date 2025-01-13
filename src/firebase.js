// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzKg5JduqtgtI9JEFpoTrcw3ibFYwL-nQ",
  authDomain: "chat-532d6.firebaseapp.com",
  projectId: "chat-532d6",
  storageBucket: "chat-532d6.firebasestorage.app",
  messagingSenderId: "1092760099770",
  appId: "1:1092760099770:web:76ea5aecb3369e67e9db83"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth, db };
