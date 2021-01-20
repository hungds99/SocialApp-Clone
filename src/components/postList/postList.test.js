import React from "react";
import { shallow } from "enzyme";
import PostList from "./postList";

describe("PostList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PostList />);
    expect(wrapper).toMatchSnapshot();
  });
});
