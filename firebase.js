
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBzhzlMMoYexa_7bW-oCVp1bEsxwK8Y8Fw",
  authDomain: "test-f1209.firebaseapp.com",
  projectId: "test-f1209",
  storageBucket: "test-f1209.firebasestorage.app",
  messagingSenderId: "904590143556",
  appId: "1:904590143556:web:e74301157211b271f6cc11",
  measurementId: "G-ETGTSGYDT3"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
