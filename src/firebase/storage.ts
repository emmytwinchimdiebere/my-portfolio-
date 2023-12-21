// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIWahGx0PUC9Oya7OFo9PqGgYD1b_R-O8",
  authDomain: "strivecodes.firebaseapp.com",
  databaseURL: "https://strivecodes.firebaseio.com",
  projectId: "strivecodes",
  storageBucket: "strivecodes.appspot.com",
  messagingSenderId: "621682884139",
  appId: "1:621682884139:web:4b4833aa3475dcd3f5346e",
  measurementId: "G-KVXJQ0X34J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);