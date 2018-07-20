import React, { Component } from "react";

//Installed dependencies imports
import { Button } from "rmwc/Button";
import { Icon } from "rmwc/Icon";
import GoogleMapReact from "google-map-react";

//CoVo javascript imports
import { covoCoordToRealCoord } from "../../businessFunctions/coVoPlaces";

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
		dep: { text: "", covoLat: 0, covoLong: 0, rdvGmapsId: "" },
		arrival: { text: "", covoLat: 0, covoLong: 0, rdvGmapsId: "" }
	},
	pay: {
		currency: "EUR",
		trip_part: { completeJourney: null, aToB: null }
	},
	riders: {
		ZYFID: {
			riderType: "seriouslyfun",
			departurePoint: {
				covoLat: 0,
				covoLong: 0,
				rdvId: "dearyDepartureID"
			},
			arrivalPoint: {
				covoLat: 0,
				covoLong: 0,
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

	testOnCoVoPlaceChosen = (
		waypointKey,
		{ covoLat, covoLong },
		gmapsPlaceId
	) => {
		let newWaypoint = {
			...this.state.waypoints[waypointKey],
			covoLat,
			covoLong,
			rdvGmapsId: gmapsPlaceId
		};
		this.setState({
			waypoints: { ...this.state.waypoints, [waypointKey]: newWaypoint }
		});
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
				<div className="test-content">
					<CoVoPlaceChooser
						boxName="Departure"
						boxContent={this.state.waypoints["dep"].text}
						onBoxContentChange={(value) => {
							this.testBoxContentChange(value, "dep");
						}}
						placeLat={this.state.waypoints["dep"].lat}
						placeLong={this.state.waypoints["dep"].long}
						onCoVoPlaceChosen={(
							{ covoLat, covoLong },
							gmapsPlaceId
						) =>
							this.testOnCoVoPlaceChosen(
								"dep",
								{ covoLat, covoLong },
								gmapsPlaceId
							)
						}
					/>
					<CoVoPlaceChooser
						boxName="Arrival"
						boxContent={this.state.waypoints["arrival"].text}
						onBoxContentChange={(value) => {
							this.testBoxContentChange(value, "arrival");
						}}
						placeLat={this.state.waypoints["arrival"].lat}
						placeLong={this.state.waypoints["arrival"].long}
						onCoVoPlaceChosen={(
							{ covoLat, covoLong },
							gmapsPlaceId
						) =>
							this.testOnCoVoPlaceChosen(
								"arrival",
								{ covoLat, covoLong },
								gmapsPlaceId
							)
						}
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
				<Button onClick={() => console.log(this.state)}>
					Log state
				</Button>
				<Button onClick={() => this.setState({ readyToPush: true })}>
					Set readyToPush=true
				</Button>
				<div>
					<div style={{ height: "50vh", width: "80%" }}>
						<GoogleMapReact
							bootstrapURLKeys={{
								key: "AIzaSyBleDs9DsB9YqfrmxffcvgFuHEeh_lshP4"
							}}
							center={{
								lat: covoCoordToRealCoord({
									covoLat:
										this.state.waypoints.dep.covoLat / 2 +
										this.state.waypoints.arrival.covoLat /
											2,
									covoLong: 0
								}).lat,
								lng: covoCoordToRealCoord({
									covoLat: 0,
									covoLong:
										this.state.waypoints.dep.covoLong / 2 +
										this.state.waypoints.arrival.covoLong /
											2
								}).long
							}}
							zoom={1}
						>
							<Icon
								lat={
									covoCoordToRealCoord({
										covoLat: this.state.waypoints.dep
											.covoLat,
										covoLong: 0
									}).lat
								}
								lng={
									covoCoordToRealCoord({
										covoLat: 0,
										covoLong: this.state.waypoints.dep
											.covoLong
									}).long
								}
								text={"Kreyser Avrora"}
								strategy="ligature"
								title="Departure"
								style={{ color: "green" }}
							>
								flight_takeoff
							</Icon>
							<Icon
								lat={
									covoCoordToRealCoord({
										covoLat: this.state.waypoints.arrival
											.covoLat,
										covoLong: 0
									}).lat
								}
								lng={
									covoCoordToRealCoord({
										covoLat: 0,
										covoLong: this.state.waypoints.arrival
											.covoLong
									}).long
								}
								strategy="ligature"
								title="Arrival"
								style={{ color: "red" }}
							>
								flight_landing
							</Icon>
						</GoogleMapReact>
					</div>
				</div>
			</div>
		);
	}
}

export default TestPage;
