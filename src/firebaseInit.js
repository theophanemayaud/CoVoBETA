import firebase from "firebase/app";
import "firebase/firestore";

//Stuff for firebase (firestore)

const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCYpY7U9OHt3KWPuUr9Bsxp7MlX4JPJ9AY",
    authDomain: "covo-io.firebaseapp.com",
    databaseURL: "https://covo-io.firebaseio.com",
    projectId: "covo-io",
    storageBucket: "covo-io.appspot.com",
    messagingSenderId: "701812569579"
  }; // config from Firebase Console

  // Initialize firebase instance

  firebase.initializeApp(firebaseConfig);

  // Initialize Cloud Firestore through Firebase
  const firestore = firebase.firestore();
  const settings = { /* your settings... */ timestampsInSnapshots: true };
  firestore.settings(settings);
  return firebase;
};
export default firebaseInit;
