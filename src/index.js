import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 

import Homepage from "./pages/Homepage"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGaOEZsRK4L-kxoWhRqEVkHyBAjYl-K1g",
  authDomain: "underseen-c69b8.firebaseapp.com",
  projectId: "underseen-c69b8",
  storageBucket: "underseen-c69b8.appspot.com",
  messagingSenderId: "249453419924",
  appId: "1:249453419924:web:79701dc4da26fd58590381"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
