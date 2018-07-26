import React, { Component } from "react";

//Installed dependencies imports
//import { Button } from "rmwc/Button";
//import { Icon } from "rmwc/Icon";
//import GoogleMapReact from "google-map-react";

//CoVo javascript imports
//import { covoCoordToRealCoord } from "../../businessFunctions/coVoPlaces";
import PageNotFound from "../PageNotFound";

//Content imports
import "./TestPage.css";
//import PushTripToFirestore from "../PushTripToFirestore";
//import CoVoPlaceChooser from "../CoVoPlaceChooser";
import GetFromFirestore from "./Tests/GetFromFirestore";
import { Route, Switch, Link } from "react-router-dom";

//test content/pages
import ICoVoPlaceChooser from "./Tests/ICoVoPlaceChooser";

//Temporary or unclassified imports
//import AddTrip from "../AddTrip";
import CoVoTripsFromContext from "./Tests/CoVoTripsFromContext.js";
import CoVoTrips from "./Tests/CoVoTrips";
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
    const { match } = this.props; // coming from React Router.

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
          <Switch>
            <Route
              exact
              path={match.url}
              render={() => {
                return (
                  <ul>
                    <hr />
                    <div>
                      Component to start working with redux-firestore in order
                      to find how to use it. It's Working !
                    </div>
                    <li>
                      <Link to={`${match.url}/get-from-firestore`}>
                        GetFromFirestore
                      </Link>
                    </li>
                    <hr />
                    <div>Older component to fetch with redux-firestore</div>
                    <li>
                      <Link to={`${match.url}/covo-trips-from-context`}>
                        CoVoTripsFromContext
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to={`${match.url}/covo-trips`}>CoVoTrips</Link>
                    </li>
                    <hr />
                    <div>
                      Choose departure, arrival and display on map. Also calls
                      PushTripToFirestore to see if data seems valid.
                    </div>
                    <li>
                      <Link to={`${match.url}/i-covo-place-chooser`}>
                        ICoVoPlaceChooser
                      </Link>
                    </li>
                    <hr />
                  </ul>
                );
              }}
            />
            <Route
              exact
              path={`${match.url}/get-from-firestore`}
              component={GetFromFirestore}
            />
            <Route
              exact
              path={`${match.url}/covo-trips-from-context`}
              component={CoVoTripsFromContext}
            />
            <Route
              exact
              path={`${match.url}/covo-trips`}
              component={CoVoTrips}
            />
            <Route
              exact
              path={`${match.url}/i-covo-place-chooser`}
              component={ICoVoPlaceChooser}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TestPage;
