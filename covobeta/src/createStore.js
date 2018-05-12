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
firebase.firestore();

/*Loading from LocalStorage happens during
    creation of the Redux store.*/
//const store = createStoreWithMiddleware(reducer, load(), composeWithDevTools());
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(
    reduxFirestore(firebase, { covo_trips: "covo_trips" }),
    applyMiddleware(save())
    // firebase instance as first argument
    // other store enhancers if any
  )
);