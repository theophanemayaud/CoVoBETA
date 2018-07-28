import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CoVoPlaceChooser from "./";

Enzyme.configure({ adapter: new Adapter() });

//Beginning of test

test("shallow render without crashing", () => {
  const props = {
    boxName: "",
    boxContent: "",
    placeLat: 0,
    placeLong: 0,
    onBoxContentChange: () => {},
    onCoVoPlaceChosen: () => {}
  };
  shallow(<CoVoPlaceChooser {...props} />);
});
