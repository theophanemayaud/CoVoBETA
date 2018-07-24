import React from "react";

//Installed dependencies imports
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//Content imports
import "material-design-icons/iconfont/material-icons.css";
import "typeface-roboto";

/**CoVo javascript imports
 ** (has to be after content imports here
 ** because of material-components-web css) **/
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import createCoVoStore from "./createCoVoStore";

//Temporary or unclassified imports

//Beginning of implementation

const store = createCoVoStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
