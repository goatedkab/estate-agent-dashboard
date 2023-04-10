// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm46Ws4w86PTnSN1895izNR48xbeyilXQ",
  authDomain: "estate-agent-dashboard.firebaseapp.com",
  projectId: "estate-agent-dashboard",
  storageBucket: "estate-agent-dashboard.appspot.com",
  messagingSenderId: "238404921102",
  appId: "1:238404921102:web:1ca005dfdd09fcddfe595f",
  measurementId: "G-R0MP8JS2WW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 