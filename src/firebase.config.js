// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmspDlpeBdM2YuU2x5kkt5SAycwHZkj7A",
  authDomain: "jobme-2a5d9.firebaseapp.com",
  projectId: "jobme-2a5d9",
  storageBucket: "jobme-2a5d9.appspot.com",
  messagingSenderId: "377162971417",
  appId: "1:377162971417:web:ee5c679fdd3fdc3e52ad88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};