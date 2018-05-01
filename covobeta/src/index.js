import React from "react";

//Installed dependencies imports
import ReactDOM from "react-dom";

//Installed dependencies imports
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { save, load } from "redux-localstorage-simple";

//Content imports
import "./index.css";
import "typeface-roboto";

/**CoVo javascript imports
 ** (has to be after content imports here
 ** because of material-components-web css) **/
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import reducer from "./reducers";

//Temporary or unclassified imports

//Beginning of implementation
/*    Saving to LocalStorage is achieved using Redux
    middleware. The 'save' method is called by Redux
    each time an action is handled by your reducer. */

const createStoreWithMiddleware = applyMiddleware(
  save() // Saving done here
)(createStore);

/*Loading from LocalStorage happens during
    creation of the Redux store.*/
const store = createStoreWithMiddleware(reducer, load(), composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
