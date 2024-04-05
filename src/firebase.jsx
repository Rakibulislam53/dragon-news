// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2JZJgSfbqFkbR6NkNKNhQxGBZUaTIF4A",
  authDomain: "dragon-news-8a5cd.firebaseapp.com",
  projectId: "dragon-news-8a5cd",
  storageBucket: "dragon-news-8a5cd.appspot.com",
  messagingSenderId: "128762762965",
  appId: "1:128762762965:web:bebd3bf88438e62b03f45c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
