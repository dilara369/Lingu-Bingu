// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2nBIixv7eJ4VPuLO6G0M0sukFxFU0jXo",
  authDomain: "lingu-bingu.firebaseapp.com",
  projectId: "lingu-bingu",
  storageBucket: "lingu-bingu.firebasestorage.app",
  messagingSenderId: "964899866586",
  appId: "1:964899866586:web:c91b530d10fd6ed8f9e2e3",
  measurementId: "G-4G37RQ9EMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

