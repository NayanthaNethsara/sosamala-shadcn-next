// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Z0erl0XUtY4jlESjVVgp5nCeVK7upbU",
  authDomain: "sosamala.firebaseapp.com",
  databaseURL:
    "https://sosamala-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sosamala",
  storageBucket: "sosamala.appspot.com",
  messagingSenderId: "148087813359",
  appId: "1:148087813359:web:8bbe8c299cac81d48a571a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
