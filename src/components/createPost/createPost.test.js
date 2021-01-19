import React from "react";
import { shallow } from "enzyme";
import CreatePost from "./createPost";

describe("CreatePost", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreatePost />);
    expect(wrapper).toMatchSnapshot();
  });
});
