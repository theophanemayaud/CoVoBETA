import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./firebaseui-overrides.global.css"; // Import globally.
import "material-components-web/dist/material-components-web.min.css";
import "typeface-roboto";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
