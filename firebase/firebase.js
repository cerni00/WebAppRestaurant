
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWgGBUPf6tr5F1xyf6o-rT8lWLezfVB54",
  authDomain: "mobileapp-56fc1.firebaseapp.com",
  projectId: "mobileapp-56fc1",
  storageBucket: "mobileapp-56fc1.appspot.com",
  messagingSenderId: "569452177668",
  appId: "1:569452177668:web:f5e904e5ea2796c8b0c851",
  measurementId: "G-6GZR5522G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
