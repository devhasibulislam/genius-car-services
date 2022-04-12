// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeouzL_aPsTHUyxYAGtl-EYZGWeYimKv0",
    authDomain: "genius-car-services-f7114.firebaseapp.com",
    projectId: "genius-car-services-f7114",
    storageBucket: "genius-car-services-f7114.appspot.com",
    messagingSenderId: "486688932972",
    appId: "1:486688932972:web:5fc235cb933f0ff2f38449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;