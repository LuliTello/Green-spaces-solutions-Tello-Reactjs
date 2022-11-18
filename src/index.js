import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb5MTBClARPjtD6lapp4onkhDvJDUYqSw",
  authDomain: "greenspacessolutions-tello.firebaseapp.com",
  projectId: "greenspacessolutions-tello",
  storageBucket: "greenspacessolutions-tello.appspot.com",
  messagingSenderId: "963212555822",
  appId: "1:963212555822:web:412784ba9faaad4f7411bf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/*<React.StrictMode>*/}
    <App />
  {/*</React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
