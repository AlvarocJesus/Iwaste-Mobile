// Import the functions you need from the SDKs you need
import Firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc0mBWHuzP3fa6i3ZxAGlHFA8zZuvtAc8",
  authDomain: "exemplornfirebase.firebaseapp.com",
  databaseURL: "https://exemplornfirebase-default-rtdb.firebaseio.com",
  projectId: "exemplornfirebase",
  storageBucket: "exemplornfirebase.appspot.com",
  messagingSenderId: "636527906632",
  appId: "1:636527906632:web:413c2f84d68f429603ed7d"
};

// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);

export const storage =  Firebase.storage(app);
export const db = app.database();