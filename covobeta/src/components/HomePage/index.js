import React, { Component } from "react";

//Installed dependencies imports
import { Button } from "rmwc/Button";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

//CoVo components imports

//Content imports
import "./HomePage.css";

//Temporary or unclassified imports

//Beginning of implementation
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "San Francisco, CA" };
    this.onChange = address => this.setState({ address });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

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
          <form onSubmit={this.handleFormSubmit}>
            <PlacesAutocomplete inputProps={inputProps} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;
