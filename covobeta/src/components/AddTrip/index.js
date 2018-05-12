import React, { Component } from "react";
import PropTypes from "prop-types";

//Installed dependencies imports
import { connect } from "react-redux";
import { TextField } from "rmwc/TextField";
import { Button } from "rmwc/Button";
//date time picker
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import TimePicker from "material-ui-pickers/TimePicker";
import DatePicker from "material-ui-pickers/DatePicker";
import DateTimePicker from "material-ui-pickers/DateTimePicker";
import { MuiThemeProvider, createMuiTheme } from "material-ui";

//CoVo javascript imports
import {
  setCoVoArrivalPlace,
  setCovoDeparturePlace,
  setSubDepartureRdvPoint,
  setDepartureTimestamp
} from "../../actions";
import db from "../db";

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
const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#1db6e7"
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: "#gggggg",
        color: "white"
      }
    },

    MuiPickersDay: {
      day: {
        color: "#1db6e7"
      },
      selected: {
        backgroundColor: "#ffffff"
      },
      current: {
        color: "#fe70c4"
      }
    },
    MuiPickersModal: {
      dialogAction: {
        "& > button": {
          color: "#fe70c4"
        }
      }
    }
  }
});

class AddTrip extends Component {
  saveToFirestore = () => {
    console.log("In saveToFirestore with value :");
    console.log(this.props.newTripInfo);
  };
  loadTrips = () => {
    db
      .collection("covo_trips")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id + " => ");
          console.log(doc.data());
        });
      });
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
        <MuiThemeProvider theme={materialTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              autoOk
              ampm={false}
              disablePast
              autoSubmit
              value={this.props.newTripInfo.departureTimestamp}
              onChange={this.props.onDepartureTimestampChange}
              label="Moment of departure"
              showTodayButton
              outlined
              TextFieldComponent={TextField}
            />
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
        <Button raised onClick={this.saveToFirestore}>
          Save to firestore
        </Button>
        <div>
          <Button raised onClick={this.loadTrips}>
            Load Trips
          </Button>
          <div>Loaded trips : {this.props.firestore.covo_trips}</div>
        </div>
        <div>
          <Button raised onClick={() => console.log(this.props)}>
            Log props
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newTripInfo: state.newTripInfo,
  firestore: state.firestore,
  covo_trips: state.firestore.ordered.covo_places
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
    onDepartureTimestampChange: date => {
      dispatch(setDepartureTimestamp(date));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);
