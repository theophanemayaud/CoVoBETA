import React, { Component } from "react";

//Installed dependencies imports
import { Button } from "rmwc/Button";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { connect } from "react-redux";
import { TextField } from "rmwc/TextField";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryText,
  ListItemGraphic,
  ListItemMeta
} from "rmwc/List";
import Popover from "material-ui/Popover";

//CoVo components imports
import { setFromAddress } from "../../../actions";

//Content imports
import "./CoVoDynamicMenu.css";

//Temporary or unclassified imports

//Beginning of implementation
class CoVoDynamicMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleApiReturnText: "",
      loginPopoverIsOpen: false
    };
  }
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };
  onError = (status, clearSuggestions) => {
    this.setState({ googleApiReturnText: status });
    clearSuggestions();
  };
  inputAdressChange = address => {
    this.props.fromAddressChange(address);
    this.setState({ googleApiReturnText: "" });
    this.setState({ loginPopoverIsOpen: true });
  };

  render() {
    return (
      <div className="covo-dynamic-menu">
        <PlacesAutocomplete
          value={this.props.fromAddress}
          onChange={this.inputAdressChange}
          onSelect={this.handleSelect}
          onError={this.onError}
          debounce={0}
          highlightFirstSuggestion={true}
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
              <Popover
                open={this.state.loginPopoverIsOpen}
                onClose={() => this.setState({ loginPopoverIsOpen: false })}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
              >
                <div
                  open={this.state.loginPopoverIsOpen}
                  onClose={() => this.setState({ loginPopoverIsOpen: "false" })}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                >
                  <List dense>
                    {suggestions.map((suggestion, index) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#f12e2e", cursor: "pointer" }
                        : { backgroundColor: "#4ccaf2", cursor: "pointer" };
                      return (
                        <ListItem
                          className="dyn-list-item"
                          {...getSuggestionItemProps(suggestion)}
                        >
                          <ListItemText>{suggestion.description}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
              </Popover>
            </div>
          )}
        </PlacesAutocomplete>
        {this.state.googleApiReturnText.length > 0 && (
          <div>{this.state.googleApiReturnText}</div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(CoVoDynamicMenu);
