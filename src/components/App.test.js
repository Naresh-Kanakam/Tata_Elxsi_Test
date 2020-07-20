import React from "react";
import { shallow } from "enzyme";

import App from "./App";

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe("List of movies are displayed", () => {
  it("App renders without crashing", () => {
    setup();
  });
  it("Should have MoviesList", () => {
    const { wrapper } = setup();
    expect(wrapper.find("MoviesList")).toHaveLength(1);
  });
});
