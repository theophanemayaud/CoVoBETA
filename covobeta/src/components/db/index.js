//top of the file
import firebase from "firebase";
require("firebase/firestore");

//Stuff for firebase (firestore)
const firebaseConfig = {
  apiKey: "AIzaSyCYpY7U9OHt3KWPuUr9Bsxp7MlX4JPJ9AY",
  authDomain: "covo-io.firebaseapp.com",
  databaseURL: "https://covo-io.firebaseio.com",
  projectId: "covo-io",
  storageBucket: "covo-io.appspot.com",
  messagingSenderId: "701812569579"
}; // config from Firebase Console
// Initialize firebase instance
firebase.initializeApp(firebaseConfig, "firestore");
// Initialize Cloud Firestore through Firebase

//bottom of the file
const db = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
db.settings(settings);
export default db;
