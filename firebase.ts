// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy3GBzw0mx-1OwMmCBpJsKEFCFR_XSrBU",
  authDomain: "chatgpt-clone-597eb.firebaseapp.com",
  projectId: "chatgpt-clone-597eb",
  storageBucket: "chatgpt-clone-597eb.appspot.com",
  messagingSenderId: "978018583094",
  appId: "1:978018583094:web:df73e813cc034d5c648e97",
  measurementId: "G-EJR0KZBH0D"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};

