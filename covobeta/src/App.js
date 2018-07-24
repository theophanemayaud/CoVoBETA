import React, { Component } from "react";

//Installed dependencies imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//CoVo components imports
import {
  CoVoToolbar,
  CoVoPageContent,
  CoVoFooter
} from "./components/CoVoLayout";
import HomePage from "./components/HomePage";
import CoVoForum from "./components/CoVoForum";
import PageNotFound from "./components/PageNotFound";

//Content imports
import "./App.css";

//Temporary or unclassified imports
import TestPage from "./components/TestPage";

//Beginning of implementation
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CoVoToolbar />
          <CoVoPageContent>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/index.html" exact component={HomePage} />
              <Route path="/forum" exact component={CoVoForum} />
              <Route path="/test" exact component={TestPage} />
              <Route component={PageNotFound} />
            </Switch>
          </CoVoPageContent>
          <CoVoFooter />
        </div>
      </Router>
    );
  }
}

export default App;
