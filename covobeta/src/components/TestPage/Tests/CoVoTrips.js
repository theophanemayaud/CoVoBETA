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

  render() {
    console.log("In CoVoTrips render");
    console.log(this.props);
    const { firestore } = this.context.store;
    const CovoTripsShown = firestore => {
      if (typeof this.props.covo_trips !== "undefined") {
        // the variable is defined
        const depart_date = new Date(
          this.props.covo_trips[0].departure_timestamp.seconds * 1000
        );
        return (
          <div>
            <div>Trip uid : {JSON.stringify(this.props.covo_trips[0].id)}</div>
            <div>
              Trip approx duration :
              {JSON.stringify(this.props.covo_trips[0].approx_hours_duration)}
            </div>
            <div>
              Trip time of departure :
              {depart_date.toString()}
            </div>
          </div>
        );
      } else {
        return <div>Well there, load those trips away boy !!! </div>;
      }
    };
    return (
      <div>
        {/*{this.props.covo_trips.map(covo_trip => (
          <div key={covo_trip.id}>{JSON.stringify(covo_trip)}</div>
        ))}*/}
        <Button raised onClick={() => console.log(this.props)}>
          Log Props
        </Button>
        <Button raised onClick={() => firestore.get("covo_trips")}>
          Get covo_trips
        </Button>
        <div>Yes !!!</div>

        <CovoTripsShown firestore={firestore} />
      </div>
    );
  }
}

export default connect(state => ({
  covo_trips: state.firestore.ordered.covo_trips
}))(CoVoTrips);
