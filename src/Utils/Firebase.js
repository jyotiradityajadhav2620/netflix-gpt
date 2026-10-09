// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA02le83cZfKM8Q7-dSXSnHQob5mw2C1xw",
  authDomain: "netflixgpt-1508a.firebaseapp.com",
  projectId: "netflixgpt-1508a",
  storageBucket: "netflixgpt-1508a.firebasestorage.app",
  messagingSenderId: "395866398966",
  appId: "1:395866398966:web:1bfa7f5521494a3da68cd7",
  measurementId: "G-99EX76YP3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Bind auth to your app instance
export const auth = getAuth(app);
