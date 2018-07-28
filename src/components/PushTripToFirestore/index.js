import React, { Component } from "react";

//Installed dependencies imports
import PropTypes from "prop-types";
import { Snackbar } from "rmwc/Snackbar";

//CoVo javascript imports

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
  static defaultProps = {};
  static propTypes = {
    readyToPush: PropTypes.bool.isRequired,
    departureTimestamp: PropTypes.string.isRequired,
    approxDuration: PropTypes.number.isRequired,
    waypoints: PropTypes.objectOf(
      PropTypes.shape({
        text: PropTypes.string,
        lat: PropTypes.number,
        long: PropTypes.number,
        rdvId: PropTypes.string
      })
    ).isRequired,
    pay: PropTypes.shape({
      currency: PropTypes.string,
      trip_part: PropTypes.objectOf(PropTypes.number)
    }).isRequired,
    riders: PropTypes.objectOf(
      PropTypes.shape({
        riderType: PropTypes.string,
        departurePoint: PropTypes.shape({
          lat: PropTypes.number,
          long: PropTypes.number,
          rdvId: PropTypes.string
        }),
        arrivalPoint: PropTypes.shape({
          lat: PropTypes.number,
          long: PropTypes.number,
          rdvId: PropTypes.string
        })
      })
    ).isRequired,
    onPushResult: PropTypes.func
    /* one arguments : isError ? bool true or false*/
  };
  bareESnackbar = (snackText) => {
    return (
      <Snackbar
        show
        style={{ zIndex: 99 }}
        message={snackText}
        onHide={() => this.props.onPushResult(true)}
        alignStart
        timeout={2000}
      />
    );
  };
  bareSnackbar = (snackText) => {
    return (
      <Snackbar
        show
        style={{ zIndex: 99 }}
        message={snackText}
        onHide={() => this.props.onPushResult(false)}
        alignStart
        timeout={2000}
      />
    );
  };
  render() {
    if (this.props.readyToPush === false) {
      return null;
    } else if (this.props.readyToPush === true) {
      if (this.props.waypoints.dep.text === "") {
        return <div>{this.bareESnackbar("Please choose departure place")}</div>;
      } /*else if (this.props.waypoints.dep.rdvId === "") {
				return (
					<div>{this.bareESnackbar("Please choose sub departure point")}</div>
				);
			} */ else if (
        this.props.waypoints.arrival.text === ""
      ) {
        return (
          <div>{this.bareESnackbar("Please choose an arrival place")}</div>
        );
      } else if (this.props.departureTimestamp === "") {
        return (
          <div>{this.bareESnackbar("Please choose a departure time")}</div>
        );
      } else {
        return <div>{this.bareSnackbar("Trip looks ok to be firestored")}</div>;
      }
    } else {
      return <div>{this.bareESnackbar("A problem occured")}</div>;
    }
  }
}

/*const mapStateToProps = state => ({
  newTripInfo: state.newTripInfo
});

const mapDispatchToProps = dispatch => {
  return {
    unsetReadyToPush: () => {
      dispatch(setReadyToPush(false));
    }
    /*onArrivalPlaceTextboxChange: event => {
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PushTripToFirestore);*/

export default PushTripToFirestore;
