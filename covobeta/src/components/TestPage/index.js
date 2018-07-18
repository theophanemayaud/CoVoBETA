import React, { Component } from "react";

//Installed dependencies imports

//CoVo javascript imports

//Content imports
import "./TestPage.css";

//Temporary or unclassified imports
//import AddTrip from "../AddTrip";
//import CoVoTripsFromContext from "./Tests/CoVoTripsFromContext.js";
//import CoVoTrips from "./Tests/CoVoTrips";
//import CoVoDynamicMenu from "./Tests/CoVoDynamicMenu";
import CoVoPlaceChooser from "../CoVoPlaceChooser";

//Descriptions of props, what it does, and what it affects
//Beginning of implementation
class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testBox: ""
    };
  }
  testBoxContentChange = value => {
    this.setState({ testBox: value });
  };
  testOnCoVoPlaceChosen = () => {
    console.log("Chose a place");
  };
  render() {
    return (
      <div className="test-page">
        <div>Test content beneath</div>
        <hr />
        <hr />
        {/*<CoVoTrips />*/}
        {/*<CoVoTripsFromContext />*/}
        {/*<AddTrip />*/}
        {/*<CoVoDynamicMenu />*/}
        {/*boxName : name of the textbox
        ** boxContent : text in the boxName
        ** boxContentChange(text) : function to call when there is some new text
        ** onCoVoPlaceChosen(text)*/}
        <div className="test-content">
          <CoVoPlaceChooser
            boxName="Test place chooser"
            boxContent={this.state.testBox}
            boxContentChange={this.testBoxContentChange}
            onCoVoPlaceChosen={this.testOnCoVoPlaceChosen}
          />
        </div>
      </div>
    );
  }
}

export default TestPage;
