import React from "react";
import { shallow } from "enzyme";
import RightMenu from "./rightMenu";

describe("RightMenu", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RightMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
