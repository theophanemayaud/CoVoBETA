import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class CoVoTrips extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { firestore } = this.context.store;
    firestore.get("covo_trips");
  }

  render() {
    return (
      <div>
        {this.props.covo_trips.map(covo_trip => (
          <div key={covo_trip.id}>{JSON.stringify(covo_trip)}</div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  covo_trips: state.firestore.ordered.covo_trips
}))(CoVoTrips);
