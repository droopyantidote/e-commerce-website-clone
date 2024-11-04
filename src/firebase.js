// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDacxTnca7XVVCctLejxBff3qxaEjXk0g",
  authDomain: "e-commerce-website-1ce84.firebaseapp.com",
  projectId: "e-commerce-website-1ce84",
  storageBucket: "e-commerce-website-1ce84.appspot.com",
  messagingSenderId: "813347589374",
  appId: "1:813347589374:web:339a9d2e1416bea11629af",
  measurementId: "G-DYHL1153TT",
};

// Initialize Firebase and Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
