import React, { Component } from "react";

//Installed dependencies imports
import { Button } from "rmwc/Button";

//CoVo components imports

//Content imports
import "./HomePage.css";

//Temporary or unclassified imports

//Beginning of implementation
class HomePage extends Component {
  render() {
    return (
      <div className="covo-home-page">
        <p className="app-intro">
          Yes, this website exists but it is not yet ready !!! We are busy
          making it great, so it can help everyone out there who needs to go
          about freely. Well, but of course, who needs this, really ?
        </p>
        <Button raised theme="mdc-theme--secondary-bg">
          Default
        </Button>
      </div>
    );
  }
}

export default HomePage;
