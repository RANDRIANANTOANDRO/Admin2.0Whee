// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArDP9UddTCWacvyBS0ZMbtSMTKzfY3DvQ",
  authDomain: "whee2-72aee.firebaseapp.com",
  projectId: "whee2-72aee",
  storageBucket: "whee2-72aee.appspot.com",
  messagingSenderId: "54952257260",
  appId: "1:54952257260:web:117a26addfa017ba27a7c9",
  measurementId: "G-43QLJCE1JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app); 