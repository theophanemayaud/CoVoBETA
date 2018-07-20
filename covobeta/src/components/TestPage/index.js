import React, { Component } from "react";

//Installed dependencies imports
import { Button } from "rmwc/Button";

//CoVo javascript imports

//Content imports
import "./TestPage.css";
import PushTripToFirestore from "../PushTripToFirestore";
import CoVoPlaceChooser from "../CoVoPlaceChooser";

//Temporary or unclassified imports
//import AddTrip from "../AddTrip";
//import CoVoTripsFromContext from "./Tests/CoVoTripsFromContext.js";
//import CoVoTrips from "./Tests/CoVoTrips";
//import CoVoDynamicMenu from "./Tests/CoVoDynamicMenu";
//import PushTripToFirestore from "../PushTripToFirestore";

//Descriptions of props, what it does, and what it affects
let initialState = {
	testBox: "",
	readyToPush: false,
	departureTimestamp: new Date(),
	approxDuration: 0,
	waypoints: {
		dep: { text: "", lat: null, long: null, rdvId: "" },
		arrival: { text: "", lat: null, long: null, rdvId: "" }
	},
	pay: {
		currency: "EUR",
		trip_part: { completeJourney: null, aToB: null }
	},
	riders: {
		ZYFID: {
			riderType: "seriouslyfun",
			departurePoint: {
				lat: 0,
				long: 0,
				rdvId: "dearyDepartureID"
			},
			arrivalPoint: {
				lat: 0,
				long: 0,
				rdvId: "dearyArrivalID"
			}
		}
	}
};
//Beginning of implementation
class TestPage extends Component {
	constructor(props) {
		super(props);
		this.state = JSON.parse(JSON.stringify(initialState));
	}

	onPushResult = (isError) => {
		console.log("In onPushResult with isError:" + isError);
		if (!isError) {
			console.log("resetState");
			this.setState(JSON.parse(JSON.stringify(initialState)));
		}
		console.log("setting readyToPush to false");
		this.setState({ readyToPush: false });
	};

	testBoxContentChange = (value, pointKey) => {
		let newWaypoints = Object.assign({}, this.state.waypoints);
		newWaypoints[pointKey].text = value;
		this.setState({ waypoints: newWaypoints });
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
						boxName="Departure"
						boxContent={this.state.waypoints["dep"].text}
						boxContentChange={(value) => {
							this.testBoxContentChange(value, "dep");
						}}
						onCoVoPlaceChosen={this.testOnCoVoPlaceChosen}
					/>
					<CoVoPlaceChooser
						boxName="Arrival"
						boxContent={this.state.waypoints["arrival"].text}
						boxContentChange={(value) => {
							this.testBoxContentChange(value, "arrival");
						}}
						onCoVoPlaceChosen={this.testOnCoVoPlaceChosen}
					/>
					<PushTripToFirestore
						readyToPush={this.state.readyToPush}
						departureTimestamp={this.state.departureTimestamp}
						approxDuration={this.state.approxDuration}
						waypoints={this.state.waypoints}
						pay={this.state.pay}
						riders={this.state.riders}
						onPushResult={this.onPushResult}
					/>
				</div>
				<Button onClick={() => console.log(this.state)}> Log state </Button>
				<Button onClick={() => console.log(this.state.departureTimestamp)}>
					Log departureTimestamp
				</Button>
				<Button onClick={() => this.setState({ readyToPush: true })}>
					Set readyToPush=true
				</Button>
			</div>
		);
	}
}

export default TestPage;
