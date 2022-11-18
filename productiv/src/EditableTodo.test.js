
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import Todo from "./Todo";
import {TODO_1, TODO_2, TODO_3, TODO_4, TODO_5} from './testData';
import TodoApp from "./TodoApp";



TodoApp.update = jest.fn();
TodoApp.remove = jest.fn();


/*********** Render and Smoke Tests ****************/

it("renders without crashing", function() {
  render(<EditableTodo todo={TODO_4} />);
})

it("matches snapshot", function() {
  const {container} = render(<EditableTodo todo={TODO_5} />);
  expect(container).toMatchSnapshot();
});

/************ TEST UPDATE **********************/

it("successfully shows form", function() {
  const {container, debug } = render(<EditableTodo
    todo={TODO_1}
    update={TodoApp.update}/>);

  //click on edit button
  const editBtn = container.querySelector(".EditableTodo-toggle");
  const delBtn = container.querySelector(".EditableTodo-delBtn");
  expect(delBtn).toBeInTheDocument();
  expect(editBtn).toBeInTheDocument();

  fireEvent.click(editBtn);

  expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  }
)

it("successfully returns back to Editable Todo List after update", function () {
  const {container, debug } = render(<EditableTodo
    todo={TODO_1}
    update={TodoApp.update}/>);

  //click on edit button
  const editBtn = container.querySelector(".EditableTodo-toggle");
  const delBtn = container.querySelector(".EditableTodo-delBtn");
  expect(delBtn).toBeInTheDocument();
  expect(editBtn).toBeInTheDocument();

  fireEvent.click(editBtn);

  expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();

  const goBtn = container.querySelector(".NewTodoForm-addBtn");
  fireEvent.click(goBtn);

  expect(container.querySelector(".NewTodoForm")).not.toBeInTheDocument();
});



