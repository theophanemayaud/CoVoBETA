import React from "react";

//Installed dependencies imports
import ReactDOM from "react-dom";

//Installed dependencies imports
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";

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
const store = createStore(
  reducer,
  /* preloadedState, */ devToolsEnhancer()
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
