import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { save, load } from "redux-localstorage-simple";
import rootReducer from "./reducers";

import { reduxFirestore } from "redux-firestore";
import firebaseInit from "./firebaseInit";

const createCoVoStore = () => {
  const firebase = firebaseInit();

  const rfConfig = { oneListenerPerPath: true };

  //const store = createStoreWithMiddleware(reducer, load(), composeWithDevTools());
  const store = createStore(
    rootReducer, //Loading from LocalStorage happens during creation of the Redux store
    load({
      states: [
        "uiState",
        "userInfoAndSettings",
        "newTripInfo",
        "utils",
        "firestore.ordered"
      ],
      disableWarnings: true // stop warnings on first website load because nothing yet in localstorage
    }),
    composeWithDevTools(
      // firebase instance as first argument
      // other store enhancers if any
      reduxFirestore(firebase, rfConfig),
      applyMiddleware(
        /* Saving to LocalStorage is achieved using Redux
                middleware.The 'save' method is called by Redux
                each time an action is handled by your reducer. */
        save({
          states: [
            "uiState",
            "userInfoAndSettings",
            "newTripInfo",
            "utils",
            "firestore.ordered"
          ]
        })
      )
    )
  );
  return store;
};

export default createCoVoStore;
