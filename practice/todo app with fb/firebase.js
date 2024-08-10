// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  increment,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuKwOk23zqTp-BJltZNji9uCfAzG2dHeo",
  authDomain: "practice-fb-5e162.firebaseapp.com",
  projectId: "practice-fb-5e162",
  storageBucket: "practice-fb-5e162.appspot.com",
  messagingSenderId: "502175259886",
  appId: "1:502175259886:web:30de0b49b8ff12e2b267ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db,doc, setDoc, getDoc, collection, addDoc, increment };
