import React, { Component } from "react";

//Installed dependencies imports
import { Button } from "rmwc/Button";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { connect } from "react-redux";
import { TextField } from "rmwc/TextField";

//CoVo components imports
import { setFromAddress } from "../../actions";

//Content imports
import "./HomePage.css";

//Temporary or unclassified imports

//Beginning of implementation
class HomePage extends Component {
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  render() {
    return (
      <div className="covo-home-page">
        <p className="app-intro">
          Yes, this website exists but it is not yet ready !!! We are busy
          making it great, so it can help everyone out there who needs to go
          about freely. Well, but of course, who needs this, really ?
        </p>
        <Button raised className="mdc-theme--secondary-bg		">
          Default
        </Button>
        <div>
          <PlacesAutocomplete
            value={this.props.fromAddress}
            onChange={this.props.fromAddressChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div>
                <TextField
                  {...getInputProps({
                    label: "Search Places ...",
                    className: "location-search-input",
                    outlined: true
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#f12e2e", cursor: "pointer" }
                      : { backgroundColor: "#4ccaf2", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div>
          <button onClick={() => console.log(this.props)}>Log props</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  fromAddress: state.utils.fromAddress,
  toAddress: state.utils.toAddress
});
const mapDispatchToProps = dispatch => {
  return {
    fromAddressChange: address => {
      dispatch(setFromAddress(address));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
