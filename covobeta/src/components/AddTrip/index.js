import React, { Component } from "react";

//Installed dependencies imports

//CoVo javascript imports

//Content imports
import "./AddTrip.css";

//Temporary or unclassified imports

//Descriptions of props, what it does, and what it affects
/*this component recieves trip info as props and saves to cloud
as well as where it might also be saved*/
/** Props :
 ** Uploader
 ** Type (driver/rider)
 ** Place of departure
 ** CoVo place uuid with rdv uuid :
 ** ** -> Coordinates
 ** ** -> Google maps place uuid
 ** ** -> Descriptions for each sub uuid
 ** ** -> Photo links for each sub uuid
 ** Departure time
 ** Arrival
 ** Distance
 ** Approx Duration w/o trafic
 **/
/** Affects
 ** return : trip uuid
 **/
//Beginning of implementation
class AddTrip extends Component {
  render() {
    return <div className="add-trip">Empty data</div>;
  }
}

export default AddTrip;
