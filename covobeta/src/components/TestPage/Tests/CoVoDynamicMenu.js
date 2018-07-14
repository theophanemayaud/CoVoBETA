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
import Autocomplete from "react-autocomplete";

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
  handleSelect = value => {
    this.props.fromAddressChange(value);
    /*geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));*/
  };
  onError = (status, clearSuggestions) => {
    this.setState({ googleApiReturnText: status });
    clearSuggestions();
  };
  inputAdressChange = e => {
    this.props.fromAddressChange(e.target.value);
    this.setState({ googleApiReturnText: "" });
    this.setState({ loginPopoverIsOpen: true });
  };

  render() {
    return (
      <div className="covo-dynamic-menu">
        <Autocomplete
          getItemValue={item => item.label}
          menuStyle={{
            borderRadius: "3px",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
            background: "rgba(44, 44, 44, 0)",
            padding: "2px 0",
            fontSize: "90%",
            position: "fixed",
            overflow: "auto",
            maxHeight: "50%" // TODO: don't cheat, let it flow to the bottom
          }}
          items={[{ label: "apple" }, { label: "banana" }, { label: "pear" }]}
          renderItem={(item, isHighlighted) => (
            <div
              style={{
                background: isHighlighted ? "lightgray" : "white"
              }}
            >
              {item.label}
            </div>
          )}
          value={this.props.fromAddress}
          onChange={this.inputAdressChange}
          onSelect={this.handleSelect}
          autoHighlight
          selectOnBlur
          renderInput={props => {
            return (
              <div ref={props.ref}>
                <input
                  onFocus={props.onFocus}
                  onBlur={props.onBlur}
                  onChange={props.onChange}
                  onClick={props.onClick}
                  onKeyDown={props.onKeyDown}
                  value={props.value}
                  label="Search Places ..."
                  outlined
                />
                {console.log(props)}
              </div>
            );
          }}
        />
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
                open={false}
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
