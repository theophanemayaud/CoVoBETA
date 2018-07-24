import React, { Component } from "react";

//Installed dependencies imports
//import { Button } from "rmwc/Button";
//import { Icon } from "rmwc/Icon";
//import GoogleMapReact from "google-map-react";

//CoVo javascript imports
//import { covoCoordToRealCoord } from "../../businessFunctions/coVoPlaces";

//Content imports
import "./TestPage.css";
//import PushTripToFirestore from "../PushTripToFirestore";
//import CoVoPlaceChooser from "../CoVoPlaceChooser";
import GetFromFirestore from "./Tests/GetFromFirestore";

//Temporary or unclassified imports
//import AddTrip from "../AddTrip";
//import CoVoTripsFromContext from "./Tests/CoVoTripsFromContext.js";
//import CoVoTrips from "./Tests/CoVoTrips";
//import CoVoDynamicMenu from "./Tests/CoVoDynamicMenu";
//import PushTripToFirestore from "../PushTripToFirestore";

//Descriptions of props, what it does, and what it affects
let initialState = {};
//Beginning of implementation
class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(JSON.stringify(initialState));
  }

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
        <div className="test-content">
          <GetFromFirestore />
        </div>
      </div>
    );
  }
}

export default TestPage;
