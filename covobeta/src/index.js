import React from "react";

//Installed dependencies imports
import ReactDOM from "react-dom";

//Installed dependencies imports

//Content imports
import "./index.css";
import "typeface-roboto";

/**CoVo javascript imports
 ** (has to be after content imports here
 ** because of material-components-web css) **/
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

//Temporary or unclassified imports

//Beginning of implementation
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
