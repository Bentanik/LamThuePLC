import { getAuth } from "@firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCucmk_gm3i4zM0TTR_1TGhGxi5NFkXqHc",
  authDomain: "datn-215e5.firebaseapp.com",
  databaseURL: "https://datn-215e5-default-rtdb.firebaseio.com",
  projectId: "datn-215e5",
  storageBucket: "datn-215e5.firebasestorage.app",
  messagingSenderId: "505542682808",
  appId: "1:505542682808:web:3da56f8fd80a4a2c82ac4d",
  measurementId: "G-SY5S4YX5P4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };