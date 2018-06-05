import React from "react";

function tripDate(departure_timestamp) {
  var date_and_time = new Date(departure_timestamp.seconds * 1000);
  var date_and_time_string = date_and_time.toString();
  return date_and_time_string;
}

const DisplayTrips = covo_trips => {
  if (typeof covo_trips !== "undefined") {
    return (
      <div>
        <hr />
        {covo_trips.map((covo_trip, index) => (
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
              {tripDate(covo_trip.departure_timestamp)}
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

export default DisplayTrips;
