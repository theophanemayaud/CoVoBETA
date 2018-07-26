import React, { Component } from "react";
//import PropTypes from "prop-types";

//Installed dependencies imports
import { connect } from "react-redux";
import { TextField } from "rmwc/TextField";
import { Button } from "rmwc/Button";
//date time picker
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
//import TimePicker from "material-ui-pickers/TimePicker";
//import DatePicker from "material-ui-pickers/DatePicker";
import DateTimePicker from "material-ui-pickers/DateTimePicker";
import { MuiThemeProvider, createMuiTheme } from "material-ui";

//CoVo javascript imports
import {
  setCoVoArrivalPlace,
  setDeparturePlaceTextbox,
  setSubDepartureRdvText,
  setDepartureTimestamp
} from "../../../actions";
//Content imports

//Temporary or unclassified imports

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

class CoVoTripsFromContext extends Component {
  saveToFirestore = () => {
    console.log("In saveToFirestore with value :");
    console.log(this.props.newTripInfo);
  };
  loadTrips = () => {
    const { firestore } = this.context.store;
    firestore.get("covo_trips");
    console.log("loaded trips as firestore :");
    console.log(this.props.firestore);
  };

  render() {
    return (
      <div className="add-trip">
        <TextField
          outlined
          value={this.props.newTripInfo.departurePlaceTextbox}
          onChange={this.props.onDeparturePlaceTextboxChange}
          label="Departure"
        />
        <TextField
          outlined
          value={this.props.newTripInfo.arrivalPlaceTextbox}
          onChange={this.props.onArrivalPlaceTextboxChange}
          label="Destination"
        />
        <TextField
          outlined
          value={this.props.newTripInfo.subDepartureRdvText}
          onChange={this.props.onSubDepartureRdvTextChange}
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

const mapStateToProps = (state) => ({
  newTripInfo: state.newTripInfo,
  firestore: state.firestore,
  covo_trips: state.firestore.ordered.covo_places
});

const mapDispatchToProps = (dispatch) => {
  return {
    onArrivalPlaceTextboxChange: (event) => {
      dispatch(setCoVoArrivalPlace(event.target.value));
    },
    onDeparturePlaceTextboxChange: (event) => {
      dispatch(setDeparturePlaceTextbox(event.target.value));
    },
    onSubDepartureRdvTextChange: (event) => {
      dispatch(setSubDepartureRdvText(event.target.value));
    },
    onDepartureTimestampChange: (date) => {
      dispatch(setDepartureTimestamp(date));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoVoTripsFromContext);
