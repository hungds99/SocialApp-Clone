import React from "react";
import { shallow } from "enzyme";
import PostItem from "./postItem";

describe("PostItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PostItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
