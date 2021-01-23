import React from "react";
import { shallow } from "enzyme";
import ProfileTextarea from "./profileTextarea";

describe("ProfileTextarea", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProfileTextarea />);
    expect(wrapper).toMatchSnapshot();
  });
});
