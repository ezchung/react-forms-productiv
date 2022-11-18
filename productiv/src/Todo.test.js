import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";


/*********** Render and Smoke Tests ********/
it("renders without crashing", function() {
  render(<Todo
    id={1}
    title="test"
    description="test description"
    priority={1} />);
})

it("matches snapshot", function() {
  const {container} = render(<Todo
    id={1}
    title="test"
    description="test description"
    priority={1} />);
  expect(container).toMatchSnapshot();
});

/*********** Unit Test(s) ********/

/*Test that rendered to-do displays properly */
it("displays the todo data properly", function() {
  const {container, debug} = render(<Todo
    id={2}
    title="test2"
    description="test description2"
    priority={2} />);
  expect(container).toContainHTML("test2")
  expect(container).toContainHTML("test description2")
  expect(container).toContainHTML("(priority: 2)")
})