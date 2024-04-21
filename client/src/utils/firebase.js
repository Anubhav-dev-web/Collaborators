// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanager-47425.firebaseapp.com",
  projectId: "taskmanager-47425",
  storageBucket: "taskmanager-47425.appspot.com",
  messagingSenderId: "425180270995",
  appId: "1:425180270995:web:015bfe1b745b716fd81866",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
