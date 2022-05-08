// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIklx2JpKjIrtYgmQYxQDlePrYvJNpX7Y",
  authDomain: "lifecompleter-b979e.firebaseapp.com",
  projectId: "lifecompleter-b979e",
  storageBucket: "lifecompleter-b979e.appspot.com",
  messagingSenderId: "66703901971",
  appId: "1:66703901971:web:0b3932c30ae405b6cf86e6",
  measurementId: "G-Q3FCWKWYCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);