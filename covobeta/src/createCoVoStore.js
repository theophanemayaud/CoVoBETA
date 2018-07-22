import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { save, load } from "redux-localstorage-simple";
import rootReducer from "./reducers";

import { reduxFirestore } from "redux-firestore";
import firebaseInit from "./firebaseInit";

const firebase = firebaseInit();

const createCoVoStore = () => {
	//const store = createStoreWithMiddleware(reducer, load(), composeWithDevTools());
	const store = createStore(
		rootReducer /*Loading from LocalStorage happens during
        creation of the Redux store.*/,
		load({
			states: ["uiState", "userInfoAndSettings", "newTripInfo", "utils"]
		}),
		composeWithDevTools(
			// firebase instance as first argument
			// other store enhancers if any
			reduxFirestore(firebase),
			applyMiddleware(
				/* Saving to LocalStorage is achieved using Redux
                middleware.The 'save' method is called by Redux
                each time an action is handled by your reducer. */
				save({
					states: [
						"uiState",
						"userInfoAndSettings",
						"newTripInfo",
						"utils"
					]
				})
			)
		)
	);
	return store;
};

export default createCoVoStore;
