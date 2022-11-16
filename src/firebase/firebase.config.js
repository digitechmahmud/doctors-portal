// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd4MY5K6KgPsEyBr2e1y6X1eJf0NAjp44",
    authDomain: "doctors-portal-9110e.firebaseapp.com",
    projectId: "doctors-portal-9110e",
    storageBucket: "doctors-portal-9110e.appspot.com",
    messagingSenderId: "700209297706",
    appId: "1:700209297706:web:ddb1afa5e3594562630653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;