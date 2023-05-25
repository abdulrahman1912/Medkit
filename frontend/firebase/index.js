// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCfwDaDPpILxpRPxUmnpJK_tMvkWITjMQ",
    authDomain: "medkit-ff62e.firebaseapp.com",
    projectId: "medkit-ff62e",
    storageBucket: "medkit-ff62e.appspot.com",
    messagingSenderId: "999743092929",
    appId: "1:999743092929:web:1477080ee9f1859c3b7c40",
    measurementId: "G-LB63C3PYG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);