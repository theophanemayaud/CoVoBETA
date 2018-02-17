import React, { Component } from "react";

//Installed dependencies imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//CoVo components imports
import {
  CoVoToolbar,
  CoVoPageContent,
  CoVoFooter
} from "./components/CoVoLayout";
import CoVoHomePage from "./components/CoVoHomePage";
import CoVoForum from "./components/CoVoForum";
import PageNotFound from "./components/PageNotFound";

//Content imports
import "./App.css";

//Temporary or unclassified imports

//Beginning of implementation
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CoVoToolbar />
          <CoVoPageContent>
            <Switch>
              <Route path="/" exact component={CoVoHomePage} />
              <Route path="/forum" component={CoVoForum} />
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
