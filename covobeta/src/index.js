import React from "react";

//Installed dependencies imports
import ReactDOM from "react-dom";

//Installed dependencies imports
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { save, load } from "redux-localstorage-simple";
////stuff for firebase
import { reduxFirestore } from "redux-firestore";
import firebase from "firebase";
import "firebase/firestore";

//Content imports
import "./index.css";
import "typeface-roboto";

/**CoVo javascript imports
 ** (has to be after content imports here
 ** because of material-components-web css) **/
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import rootReducer from "./reducers";

//Temporary or unclassified imports

//Beginning of implementation
/*    Saving to LocalStorage is achieved using Redux
    middleware. The 'save' method is called by Redux
    each time an action is handled by your reducer. */
/*
const createStoreWithMiddleware = applyMiddleware(
  save() // Saving done here
)(createStore);*/

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
firebase.initializeApp(firebaseConfig, "index");
// Initialize Cloud Firestore through Firebase
//firebase.firestore();

const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

/*Loading from LocalStorage happens during
    creation of the Redux store.*/
//const store = createStoreWithMiddleware(reducer, load(), composeWithDevTools());
const store = createStore(
  rootReducer,
  load({
    states: ["uiState", "userInfoAndSettings", "newTripInfo", "utils"]
  }),
  composeWithDevTools(
    reduxFirestore(firebase),
    applyMiddleware(
      save({
        states: ["uiState", "userInfoAndSettings", "newTripInfo", "utils"]
      })
    )
    // firebase instance as first argument
    // other store enhancers if any
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
