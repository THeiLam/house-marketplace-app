// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5POm-qcImhMRWhyvBoDrXAIlOgswHvXY",
  authDomain: "house-marketplace-app-637c4.firebaseapp.com",
  projectId: "house-marketplace-app-637c4",
  storageBucket: "house-marketplace-app-637c4.firebasestorage.app",
  messagingSenderId: "1083757057053",
  appId: "1:1083757057053:web:a6383685bdfbc5e83322f4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
