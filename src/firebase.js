import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwmY9g-sYIFLdFS4W6DN0pGQlZGEjsKEo",
  authDomain: "udevs-blog-f1e17.firebaseapp.com",
  projectId: "udevs-blog-f1e17",
  storageBucket: "udevs-blog-f1e17.appspot.com",
  messagingSenderId: "283198339149",
  appId: "1:283198339149:web:ea9b02f1dbdd4239520404",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)