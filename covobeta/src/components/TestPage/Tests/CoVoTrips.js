import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "rmwc/Button";

class CoVoTrips extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  componentWillMount() {
    /*const { firestore } = this.context.store;
    firestore.get("covo_trips");*/
    // does not work    this.context.store.get("covo_trips");
  }
  tripDate(departure_timestamp) {
    var date_and_time = new Date(departure_timestamp.seconds * 1000);
    var date_and_time_string = date_and_time.toString();
    return date_and_time_string;
  }
  render() {
    console.log("In CoVoTrips render");
    console.log(this.props);

    const { firestore } = this.context.store;
    const CovoTripsShown = firestore => {
      if (typeof this.props.covo_trips !== "undefined") {
        return (
          <div>
            <hr />
            {this.props.covo_trips.map((covo_trip, index) => (
              <div key={covo_trip.id}>
                <div>
                  Trip {index + 1} Id : {JSON.stringify(covo_trip.id)}
                </div>
                <div>
                  Trip approx duration :
                  {JSON.stringify(covo_trip.approx_hours_duration)}
                </div>
                <div>
                  Trip time of departure :
                  {this.tripDate(covo_trip.departure_timestamp)}
                </div>
                <hr />
              </div>
            ))}
          </div>
        );
      } else {
        return <div>Well there, load those trips away boy !!! </div>;
      }
    };
    return (
      <div>
        <Button raised onClick={() => console.log(this.props)}>
          Log Props
        </Button>
        <Button raised onClick={() => firestore.get("covo_trips")}>
          Get covo_trips
        </Button>
        <CovoTripsShown firestore={firestore} />
      </div>
    );
  }
}

export default connect(state => ({
  covo_trips: state.firestore.ordered.covo_trips
}))(CoVoTrips);
