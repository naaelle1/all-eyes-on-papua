import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase dari Firebase Console Anda
const firebaseConfig = {
  apiKey: "AIzaSyC0W1T_bhBzVpwp3f4X4aiFop1OntFHKfQ",
  authDomain: "all-eyes-on-papua.firebaseapp.com",
  projectId: "all-eyes-on-papua",
  storageBucket: "all-eyes-on-papua.firebasestorage.app",
  messagingSenderId: "1046728330585",
  appId: "1:1046728330585:web:18affc218608b708941048"
};

// Inisialisasi Firebase Modular SDK
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore Database
export const db = getFirestore(app);    