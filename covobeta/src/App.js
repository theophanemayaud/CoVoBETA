import React, { Component } from "react";
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  Content
} from "react-mdc-web/lib";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

{
  /*import HeaderBar from "./components/HeaderBar/HeaderBar.js";*/
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*        <HeaderBar />*/}
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">Burger</ToolbarSection>

            <ToolbarSection>
              <ToolbarTitle>CoVo</ToolbarTitle>
            </ToolbarSection>

            <ToolbarSection align="end">
              <div>Dropdown </div>
              <div>Some things </div>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

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
    );
  }
}

export default App;
