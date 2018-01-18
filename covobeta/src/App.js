import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Content } from "react-mdc-web/lib";

import CoVoToolbarAndDrawer from "./components/CoVoToolbarAndDrawer/CoVoToolbarAndDrawer.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="covo-web-app">
          <CoVoToolbarAndDrawer />

          {/* Adjust top margin for fixed toolbar */}
          <Content fixed>
            <p className="App-intro">
              Yes, this website exists but it is not yet ready !!! We are busy
              making it great, so it can help everyone out there who needs to go
              about freely. Well, but of course, who needs this, really ?
            </p>
          </Content>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
