// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAigzeIWttMmnrrvzAMjLxHgWaPoMSed9Q",
  authDomain: "nytte-62364.firebaseapp.com",
  projectId: "nytte-62364",
  storageBucket: "nytte-62364.appspot.com",
  messagingSenderId: "165151914276",
  appId: "1:165151914276:web:ba177ca76bf2d2f385dbb1",
  measurementId: "G-ER2D3TMQD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== "undefined" && isSupported()) {
  analytics = getAnalytics(app);
}

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized Firebase app, Firestore, and Storage instances
export { app, db, storage, analytics };

// Export the initializeFirebase function
export const initializeFirebase = () => {
  return app;
};