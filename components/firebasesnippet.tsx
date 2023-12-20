// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAro2ureEY36Zios00jpX04QSELip-8ldY",
    authDomain: "mama-346af.firebaseapp.com",
    projectId: "mama-346af",
    storageBucket: "mama-346af.appspot.com",
    messagingSenderId: "252190526193",
    appId: "1:252190526193:web:39f5ebe35c1335bd81b750",
    measurementId: "G-24D3HQD2Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);