import React, { Component } from "react";
import PropTypes from "prop-types";

//Installed dependencies imports
import { connect } from "react-redux";
import { TextField } from "rmwc/TextField";
import { Button } from "rmwc/Button";
//date time picker
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DateTimePicker from "material-ui-pickers/DateTimePicker";
import { MuiThemeProvider } from "material-ui";
import materialTheme from "./materialTheme";

//CoVo javascript imports
import {
  setCoVoArrivalPlace,
  setDeparturePlaceTextbox,
  setSubDepartureRdvText,
  setDepartureTimestamp,
  setReadyToPush
} from "../../actions";
import DisplayTrips from "./DisplayTrips.js";
import PushTripToFirestore from "./../PushTripToFirestore";
import CoVoPlaceChooser from "./../CoVoPlaceChooser";

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
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  saveToFirestore = () => {
    console.log("In saveToFirestore with value :");
    console.log(this.props.newTripInfo);
  };

  render() {
    const { firestore } = this.context.store;

    return (
      <div className="add-trip">
        <CoVoPlaceChooser
          boxName="Departure"
          boxContent={this.props.newTripInfo.departurePlaceTextbox}
          boxContentChange={this.props.onDeparturePlaceTextboxChange}
          onCoVoPlaceChosen={() =>
            console.log("Departure place has been chosen")
          }
        />
        <CoVoPlaceChooser
          boxName="Destination"
          boxContent={this.props.newTripInfo.arrivalPlaceTextbox}
          boxContentChange={this.props.onArrivalPlaceTextboxChange}
          onCoVoPlaceChosen={() =>
            console.log("Destination place has been chosen")
          }
        />
        <CoVoPlaceChooser
          boxName="Precise RDV point"
          boxContent={this.props.newTripInfo.subDepartureRdvText}
          boxContentChange={this.props.onSubDepartureRdvTextChange}
          onCoVoPlaceChosen={() =>
            console.log("Destination place has been chosen")
          }
        />

        <MuiThemeProvider theme={materialTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              autoOk
              ampm={false}
              disablePast
              value={this.props.newTripInfo.departureTimestamp}
              onChange={this.props.onDepartureTimestampChange}
              label="Moment of departure"
              showTodayButton
              outlined
              TextFieldComponent={TextField}
            />
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
        <Button raised onClick={this.props.setReadyToPush}>
          Save to firestore
        </Button>
        <PushTripToFirestore />
        <div>
          <Button
            raised
            onClick={() => {
              firestore.get("covo_trips");
              console.log("Loading covo_trips");
            }}
          >
            Load Trips
          </Button>
          <div>Loaded trips : {DisplayTrips(this.props.covo_trips)}</div>
        </div>
        <div>
          <Button raised onClick={() => console.log(this.props)}>
            Log props
          </Button>
          <Button
            raised
            onClick={() => {
              console.log(this.props.newTripInfo.departureTimestamp);
              const depTstp = new Date(
                this.props.newTripInfo.departureTimestamp
              );
              console.log(depTstp);
              console.log(depTstp.getTime());
            }}
          >
            Print chosen time timestamp
          </Button>
          <Button
            raised
            onClick={() => {
              console.log(this.props.covo_trips[0].departure_timestamp.seconds);
              const timestamp = new Date(
                this.props.covo_trips[0].departure_timestamp.seconds * 1000
              );
              console.log(timestamp);
              console.log(timestamp.getTime());
            }}
          >
            Print first trip timestamp
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newTripInfo: state.newTripInfo,
  covo_trips: state.firestore.ordered.covo_trips
});

const mapDispatchToProps = dispatch => {
  return {
    onArrivalPlaceTextboxChange: event => {
      dispatch(setCoVoArrivalPlace(event.target.value));
    },
    onDeparturePlaceTextboxChange: event => {
      dispatch(setDeparturePlaceTextbox(event.target.value));
    },
    onSubDepartureRdvTextChange: event => {
      dispatch(setSubDepartureRdvText(event.target.value));
    },
    onDepartureTimestampChange: date => {
      dispatch(setDepartureTimestamp(date));
    },
    setReadyToPush: () => {
      dispatch(setReadyToPush(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);
