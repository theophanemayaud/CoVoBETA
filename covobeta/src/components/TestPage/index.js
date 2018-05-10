import React, { Component } from "react";

//Installed dependencies imports

//CoVo javascript imports

//Content imports
import "./TestPage.css";

//Temporary or unclassified imports
import AddTrip from "../AddTrip";

//Descriptions of props, what it does, and what it affects
//Beginning of implementation
class TestPage extends Component {
  render() {
    return (
      <div className="test-page">
        <AddTrip />
      </div>
    );
  }
}

export default TestPage;
