import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd792nvWop9slafDFEdr36g7k_6-gmr9I",
  authDomain: "fb-concesionaria.firebaseapp.com",
  projectId: "fb-concesionaria",
  storageBucket: "fb-concesionaria.appspot.com",
  messagingSenderId: "608944907162",
  appId: "1:608944907162:web:c745dcc976f10ffe77d023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);