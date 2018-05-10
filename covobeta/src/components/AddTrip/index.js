import React, { Component } from "react";
import PropTypes from "prop-types";

//Installed dependencies imports
import { connect } from "react-redux";
import { TextField } from "rmwc/TextField";
import { Button } from "rmwc/Button";
//date time picker

//CoVo javascript imports
import {
  setCoVoArrivalPlace,
  setCovoDeparturePlace,
  setSubDepartureRdvPoint,
  setDepartureTimestamp
} from "../../actions";

//Content imports
import "./AddTrip.css";

//Temporary or unclassified imports

//Descriptions of props, what it does, and what it affects
/*this component recieves trip info as props and saves to cloud
as well as where it might also be saved*/
/** Props :
 ** Uploader
 ** Type (driver/rider)
 ** CoVo place of departure uuid with rdv sub uuid :
 ** ** -> Coordinates
 ** ** -> Google maps place uuid
 ** ** -> Link to each rdv id
 ** ** -> Photo links for each sub uuid
 ** Departure time
 ** CoVo place of arrival uuid with rdv sur uuid
 ** Distance
 ** Approx Duration w/o trafic
 **/
/** Affects
 ** return: trip uuid or error
 ** Pushes info to the cloud
 **/
//Beginning of implementation
class AddTrip extends Component {
  saveToFirestore = () => {
    console.log("In saveToFirestore with value :");
    console.log(this.state);
  };

  render() {
    return (
      <div className="add-trip">
        <TextField
          outlined
          value={this.props.newTripInfo.covoDeparturePlace}
          onChange={this.props.onCovoDeparturePlaceChange}
          label="Departure"
        />
        <TextField
          outlined
          value={this.props.newTripInfo.covoArrivalPlace}
          onChange={this.props.onCovoArrivalPlaceChange}
          label="Destination"
        />
        <TextField
          outlined
          value={this.props.newTripInfo.subDepartureRdvPoint}
          onChange={this.props.onSubDepartureRdvPointChange}
          label="Precise RDV point"
        />
        <TextField
          outlined
          value={this.props.newTripInfo.departureTimestamp}
          onChange={this.props.onDepartureTimestampChange}
          label="Time of departure"
        />
        <Button raised onClick={this.saveToFirestore}>
          Save to firestore
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newTripInfo: state.newTripInfo,
  firestore: state.firestore
});

const mapDispatchToProps = dispatch => {
  return {
    onCovoArrivalPlaceChange: event => {
      dispatch(setCoVoArrivalPlace(event.target.value));
    },
    onCovoDeparturePlaceChange: event => {
      dispatch(setCovoDeparturePlace(event.target.value));
    },
    onSubDepartureRdvPointChange: event => {
      dispatch(setSubDepartureRdvPoint(event.target.value));
    },
    onDepartureTimestampChange: event => {
      dispatch(setDepartureTimestamp(event.target.value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);
