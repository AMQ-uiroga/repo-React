import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import "./index.css"
import App from "./App"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDobTe46_-uMWvYU80bOl0JZCmOG-z7cO4",
  authDomain: "react-ecommerce-coder-3aa6d.firebaseapp.com",
  projectId: "react-ecommerce-coder-3aa6d",
  storageBucket: "react-ecommerce-coder-3aa6d.firebasestorage.app",
  messagingSenderId: "341737375845",
  appId: "1:341737375845:web:0e42babbc3ad4aa98d9e8c"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)