import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import Todo from "./Todo";
import {TODO_1, TODO_2, TODO_3, TODO_4, TODO_5} from './testData';
import TodoApp from "./TodoApp";




// beforeEach(function() {
//   render(<EditableTodo todo={TODO_1}/>);
//   render(<EditableTodo todo={TODO_2}/>);
//   render(<EditableTodo todo={TODO_3}/>);
// });

/*********** Render and Smoke Tests ****************/

it("renders without crashing", function() {
  render(<EditableTodo todo={TODO_4} />);
})

it("matches snapshot", function() {
  const {container} = render(<EditableTodo todo={TODO_5} />);
  expect(container).toMatchSnapshot();
});

/************ TEST UPDATE **********************/

it("successfully updates todo item", function() {
  const {container, debug} = render(<EditableTodo
    todo={TODO_1}
    update={TodoApp.update}/>)

  //click on edit button
  const editBtn = container.querySelector(".EditableTodo-toggle");
  fireEvent.click(editBtn);

  //update form values
  const titleInput = container.querySelector("#newTodo-title");
  fireEvent.change(titleInput, { target: { value: "updated-test1" } })

  expect(container).toContainHTML("updated-test1")
})