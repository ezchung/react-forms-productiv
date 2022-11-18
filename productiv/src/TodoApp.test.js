import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import Todo from "./Todo";
import {TODO_1, TODO_2, TODO_3, TODO_4, TODO_5} from './testData';
import TodoApp from "./TodoApp";

/*********** Render and Smoke Tests ****************/

it("renders without crashing", function() {
  render(<TodoApp initialTodos={[TODO_4]} />);
})

it("matches snapshot", function() {
  const {container} = render(<TodoApp initialTodos={[TODO_4]} />);
  expect(container).toMatchSnapshot();
});


/*********** TEST THAT IT DISPLAYS ****************/



// it("successfully updates todo item", function() {
//   const {container } = render(<TodoApp todo={TODO_1} />)

//   //click on edit button
//   const editBtn = container.querySelector(".EditableTodo-toggle");
//   fireEvent.click(editBtn);

//   //update form values
//   // const titleInput = container.querySelector("#newTodo-title");
//   const titleInput = screen.getByPlaceholderText("Title");
//   debug(titleInput);
//   fireEvent.change(titleInput, {  value: "updated-test1" })
//   debug(container, "<<<<<<<<<<< Previously On")

//   //clicking submit button
//   const goBtn = container.querySelector(".NewTodoForm-addBtn");
//   fireEvent.click(goBtn);
//   debug(container, "<<<<<<<<<<< After On")

//   expect(container).toContainHTML("updated-test1");
//   expect(TodoApp.update).toHaveBeenCalled();
// });