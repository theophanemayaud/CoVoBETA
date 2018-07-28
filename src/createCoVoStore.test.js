import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import createCoVoStore from "./createCoVoStore";
import firebaseInit from "./firebaseInit";

Enzyme.configure({ adapter: new Adapter() });

//Beginning of test

test("check if store has right properties", () => {
  expect(createCoVoStore()).toEqual(expect.any(Object));
});
