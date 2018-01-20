import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Button } from "rmwc/Button";

import CoVoToolbarAndDrawer from "./components/CoVoToolbarAndDrawer/CoVoToolbarAndDrawer.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="covo-web-app">
          <div id="covo-header">
            {" "}
            <CoVoToolbarAndDrawer />
          </div>
          <div id="covo-page-content">
            <p className="app-intro">
              Yes, this website exists but it is not yet ready !!! We are busy
              making it great, so it can help everyone out there who needs to go
              about freely. Well, but of course, who needs this, really ?
            </p>
            <Button raised theme="mdc-theme--secondary-bg">
              Default
            </Button>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
