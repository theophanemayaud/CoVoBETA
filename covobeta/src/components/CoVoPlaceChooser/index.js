import React, { Component } from "react";
import PropTypes from "prop-types";

//Installed dependencies imports
import PlacesAutocomplete, {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng
} from "react-places-autocomplete";
import { TextField } from "rmwc/TextField";
import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryText,
	ListItemGraphic,
	ListItemMeta
} from "rmwc/List";

//CoVo javascript imports
import { realCoordToCoVoCoord } from "../../businessFunctions/coVoPlaces";

//CoVo components imports
//import { setFromAddress } from "../../actions";

//Content imports
import "./CoVoPlaceChooser.css";

//Temporary or unclassified imports

//Descriptions of props, what it does, and what it affects
/*General description :
* Props :
 ** boxName : name of the textbox
 ** boxContent : text in the boxName
 ** onBoxContentChange(text) : function to call when there is some new text
 ** onCoVoPlaceChosen(text) : function to call to set the covoPlace // temporarily just text
* Needs to read from store :
* Store actions needed :
* Affects
 ** return: ...
 ** ...
 **/
//Beginning of implementation
class CoVoPlaceChooser extends Component {
	static propTypes = {
		boxName: PropTypes.string,
		boxContent: PropTypes.string.isRequired,
		placeLat: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
		placeLong: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
		onBoxContentChange: PropTypes.func.isRequired,
		onCoVoPlaceChosen: PropTypes.func.isRequired
	};
	constructor(props) {
		super(props);
		this.state = {
			googleApiReturnText: ""
		};
	}

	handleSelect = (value, placeId) => {
		this.props.onBoxContentChange(value);
		let coord = { lat: null, long: null };
		let covoCoord = { covoLat: null, covoLong: null };
		geocodeByAddress(value)
			.then((results) => getLatLng(results[0]))
			.then((latLong) => {
				coord.lat = latLong.lat;
				coord.long = latLong.lng;
				covoCoord = realCoordToCoVoCoord(coord);
				this.props.onCoVoPlaceChosen(covoCoord, placeId);
			})
			.catch((error) => {
				console.error("Error", error);
				if (
					(coord.lat === null || coord.long === null) &&
					placeId !== null
				) {
					geocodeByPlaceId(placeId)
						.then((results) => getLatLng(results[0]))
						.then((latLong) => {
							coord.lat = latLong.lat;
							coord.long = latLong.lng;
							covoCoord = realCoordToCoVoCoord(coord);
							this.props.onCoVoPlaceChosen(covoCoord, placeId);
						})
						.catch((error) => {
							console.error("Error", error);
							this.props.onCoVoPlaceChosen(
								{ covoLat: 0, covoLong: 0 },
								""
							);
						});
				}
			});
	};

	onError = (status, clearSuggestions) => {
		this.setState({ googleApiReturnText: status });
		clearSuggestions();
	};

	inputAdressChange = (value) => {
		this.props.onBoxContentChange(value);
		this.setState({ googleApiReturnText: "" });
	};

	render() {
		return (
			<div className="covo-dynamic-menu">
				<PlacesAutocomplete
					value={this.props.boxContent}
					onChange={this.inputAdressChange}
					onSelect={this.handleSelect}
					onError={this.onError}
					debounce={0}
					highlightFirstSuggestion
					googleCallbackName="gmapsApiLoadedCallback"
				>
					{({
						getInputProps,
						suggestions,
						loading,
						getSuggestionItemProps
					}) => (
						<div>
							<TextField
								{...getInputProps({
									label: this.props.boxName,
									className: "location-search-input",
									outlined: true,
									onBlur: () =>
										this.setState({
											googleApiReturnText: ""
										})
								})}
							/>
							<div
								style={{
									backgroundColor: "#f2f2f2",
									position: "absolute",
									zIndex: "99"
								}}
							>
								{(() => {
									if (
										this.state.googleApiReturnText.length >
										0
									) {
										return (
											<div>
												{this.state.googleApiReturnText}
											</div>
										);
									}
								})()}
								<List twoLine>
									{suggestions.map((suggestion) => {
										return (
											<ListItem
												{...getSuggestionItemProps(
													suggestion
												)}
												ripple
											>
												<ListItemGraphic>
													{(() => {
														/* Code to log new specific icons to add
                            if (
                              (suggestion.types.length > 1 ||
                                suggestion.types[0] !== "establishment") &&
                              suggestion.types[0] !== "neighborhood" &&
                              suggestion.types[0] !== "natural_feature" &&
                              suggestion.types[0] !== "transit_station" &&
                              suggestion.types[0] !== "route" &&
                              suggestion.types[0] !== "country"
                            ) {
                              console.log(
                                "Types : " +
                                  suggestion.types.map((type, index) => {
                                    return index + " : " + type;
                                  }) +
                                  " : " +
                                  suggestion.description
                              );
                            }*/
														switch (
															suggestion.types[0]
														) {
															case "neighborhood":
																return "terrain";
															case "natural_feature":
																return "terrain";
															case "transit_station":
																return "train";
															case "route":
																return "person_pin_circle";
															case "country":
																return "star_border";
															default:
																return "place";
														}
													})()}
												</ListItemGraphic>
												<ListItemText>
													{
														suggestion
															.formattedSuggestion
															.mainText
													}
												</ListItemText>
												<ListItemSecondaryText>
													{
														suggestion
															.formattedSuggestion
															.secondaryText
													}
												</ListItemSecondaryText>
												<ListItemMeta
													onClick={(e) => {
														e.stopPropagation();
														window.open(
															"https://www.google.com/maps/search/?api=1&query=CoVo&query_place_id=" +
																suggestion.placeId,
															"_blank"
														);
													}}
												>
													info
												</ListItemMeta>
											</ListItem>
										);
									})}
								</List>
							</div>
						</div>
					)}
				</PlacesAutocomplete>
			</div>
		);
	}
}

export default CoVoPlaceChooser;
