// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Ato6ynvOY_6upA8qWQVeLmwmmf6og8M",
  authDomain: "nextjs-61b98.firebaseapp.com",
  projectId: "nextjs-61b98",
  storageBucket: "nextjs-61b98.appspot.com",
  messagingSenderId: "640116067398",
  appId: "1:640116067398:web:ac75290725eb1e195a4e47",
  measurementId: "G-2ML6G1LLN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);