import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PushTripToFirestore from "./";

Enzyme.configure({ adapter: new Adapter() });

//Beginning of test

test("shallow render without crashing", () => {
  const props = {
    readyToPush: true,
    departureTimestamp: "fake",
    approxDuration: 0,
    waypoints: {
      dep: { text: "fake", lat: 0, long: 0, rdvId: "" },
      arrival: { text: "fake", lat: 0, long: 0, rdvId: "" }
    },
    pay: { currency: "", trip_part: { fake: 0 } },
    riders: {
      fake: {
        riderType: "",
        departurePoint: { lat: 0, long: 0, rdvId: "" },
        arrivalPoint: { lat: 0, long: 0, rdvId: "" }
      }
    },
    onPushResult: () => {}
  };
  /* one arguments : isError ? bool true or false*/
  shallow(<PushTripToFirestore {...props} />);
});
