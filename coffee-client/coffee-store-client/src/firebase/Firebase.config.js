// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl7i1cfU4ho9Pi1FeIqM7IkxeQT-j7NyE",
  authDomain: "coffee-store-3d1ad.firebaseapp.com",
  projectId: "coffee-store-3d1ad",
  storageBucket: "coffee-store-3d1ad.firebasestorage.app",
  messagingSenderId: "457647234357",
  appId: "1:457647234357:web:c0b79e8aa7e985320f807c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);