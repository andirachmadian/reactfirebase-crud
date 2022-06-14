import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAjAHXVzpjcf3ODUqFMaOBW7skoF0U6v40",
  authDomain: "reactfirebase-crud-e7fe8.firebaseapp.com",
  projectId: "reactfirebase-crud-e7fe8",
  storageBucket: "reactfirebase-crud-e7fe8.appspot.com",
  messagingSenderId: "979002524387",
  appId: "1:979002524387:web:bfdd29721f6af555bcbbd6",
  measurementId: "G-91452Z2WGD"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)