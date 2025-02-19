import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "portfolio-3bd94.firebaseapp.com",
  projectId: "portfolio-3bd94",
  storageBucket: "portfolio-3bd94.firebasestorage.app",
  messagingSenderId: "388841008105",
  appId: "1:388841008105:web:0b6affd548f549667b3978",
  measurementId: "G-1NPZ3ZQL3M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
