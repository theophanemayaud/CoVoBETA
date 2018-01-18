import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  Content,
  Drawer,
  DrawerHeader,
  DrawerHeaderContent,
  DrawerContent,
  Navigation,
  Icon
} from "react-mdc-web/lib";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

import CoVoToolbar from "./components/CoVoToolbar/CoVoToolbar.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

class App extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <Router>
        <div className="covo-web-app">
          <CoVoToolbar />

          <Drawer
            open={this.state.isOpen}
            onClose={() => {
              this.setState({ isOpen: false });
            }}
          >
            <DrawerHeader>
              <DrawerHeaderContent>Directions</DrawerHeaderContent>
            </DrawerHeader>
            <DrawerContent>
              <Navigation>
                <a href="#" selected>
                  <Icon name="directions_bus" />Bus
                </a>
                <a href="#">
                  <Icon name="directions_railway" />Railway
                </a>
                <a href="#">
                  <Icon name="directions_bike" />Bike
                </a>
              </Navigation>
            </DrawerContent>
          </Drawer>
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
