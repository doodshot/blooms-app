import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5e9E8eFk4PCVtpPtcYPlQ3fD5eI7crrI",
    authDomain: "blooms-app-project.firebaseapp.com",
    projectId: "blooms-app-project",
    storageBucket: "blooms-app-project.firebasestorage.app",
    messagingSenderId: "836640929034",
    appId: "1:836640929034:web:e56d57bdb49ebd269636f3"
};
// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);

export default Firebaseapp;

export const auth = getAuth(Firebaseapp)