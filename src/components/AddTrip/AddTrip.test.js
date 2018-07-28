import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddTrip from "./";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

//Beginning of test

test("shallow render without crashing", () => {
  const store = { subscribe: () => {}, dispatch: () => {}, getState: () => {} };
  shallow(
    <Provider store={store}>
      <AddTrip />
    </Provider>
  );
});
