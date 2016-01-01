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
    console.log("In CoVoTrips with props :");
    console.log(this.props);

    return (
      <div>
        {this.props.covo_trips.map(covo_trip => (
          <div key={covo_trip.id}>{JSON.stringify(covo_trip)}</div>
        ))}
        <div>Yes !!!</div>
      </div>
    );
  }
}

export default connect(state => ({
  covo_trips: state.firestore.ordered.covo_trips
}))(CoVoTrips);
