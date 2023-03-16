
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDRQEcO6Hlk5tJ67kOdHk-Wyk5nz37fCSo",
  authDomain: "proyecto-app-react.firebaseapp.com",
  projectId: "proyecto-app-react",
  storageBucket: "proyecto-app-react.appspot.com",
  messagingSenderId: "1007492395005",
  appId: "1:1007492395005:web:3319c7bfe3408c8239b394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)