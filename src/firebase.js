import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeVgBMqMlsgNsNFnGA3xK1GBS2mF4jxSE",
  authDomain: "console-rent.firebaseapp.com",
  projectId: "console-rent",
  storageBucket: "console-rent.firebasestorage.app",
  messagingSenderId: "810863495440",
  appId: "1:810863495440:web:5613fe8b39f4c8ee86bd95",
  measurementId: "G-VS9C6G41DG"
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app); 