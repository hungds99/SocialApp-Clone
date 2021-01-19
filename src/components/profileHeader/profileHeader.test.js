import React from "react";
import { shallow } from "enzyme";
import ProfileHeader from "./profileHeader";

describe("ProfileHeader", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProfileHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
