import React, { Component } from "react";

//Installed dependencies imports
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Snackbar } from "rmwc/Snackbar";

//CoVo javascript imports
import { setReadyToPush } from "./../../actions";
//Content imports
import "./PushTripToFirestore.css";

//Temporary or unclassified imports

//Descriptions of props, what it does, and what it affects
/*General description : This component recieves the info manually entered by the user,
validates it, and then saves it to firestore, adding on the way the other info that
needs to be there. It returns a snackbar message to say succes or not, and also should
empty firestore new trip info if successful
* Needs from store :
 ** newTripInfo
* Store actions needed :
 ** setReadyToPysh
* Context :
 ** firestore
* Affects
 ** return: display either error snackbar or sucess snackbar
 **/
/*.mdc-snackbar {
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    bottom: 40px;*/
//Beginning of implementation
class PushTripToFirestore extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  bareSnackbar = snackText => {
    return (
      <div>
        <Snackbar
          className="snackbar-lifted"
          show={true}
          message={snackText}
          onHide={this.props.unsetReadyToPush}
          timeout={2000}
        />
      </div>
    );
  };
  render() {
    if (this.props.newTripInfo.readyToPush === false) {
      return null;
    } else if (this.props.newTripInfo.readyToPush === true) {
      if (this.props.newTripInfo.covoDeparturePlace === "") {
        return <div>{this.bareSnackbar("Please choose departure place")}</div>;
      } else if (this.props.newTripInfo.subDepartureRdvPoint === "") {
        return (
          <div>{this.bareSnackbar("Please choose sub departure point")}</div>
        );
      } else if (this.props.newTripInfo.covoArrivalPlace === "") {
        return <div>{this.bareSnackbar("Please choose an arrival place")}</div>;
      } else if (this.props.newTripInfo.departureTimestamp === "") {
        return <div>{this.bareSnackbar("Please choose a departure time")}</div>;
      } else {
        return <div>{this.bareSnackbar("Trip looks ok to be firestored")}</div>;
      }
    } else {
      return <div>{this.bareSnackbar("A problem occured")}</div>;
    }
  }
}

const mapStateToProps = state => ({
  newTripInfo: state.newTripInfo
});

const mapDispatchToProps = dispatch => {
  return {
    unsetReadyToPush: () => {
      dispatch(setReadyToPush(false));
    }
    /*onCovoArrivalPlaceChange: event => {
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
    }*/
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PushTripToFirestore
);
