import React from "react";
import { shallow } from "enzyme";
import PostDialog from "./postDialog";

describe("PostDialog", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PostDialog />);
    expect(wrapper).toMatchSnapshot();
  });
});
