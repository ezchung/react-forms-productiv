import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import Todo from "./Todo";
import {TODO_1, TODO_2, TODO_3, TODO_4, TODO_5} from './testData';
import TodoApp from "./TodoApp";
import TodoForm from "./TodoForm";

TodoApp.update = jest.fn();
TodoApp.create = jest.fn();
EditableTodo.handleSave = jest.fn();

const initialFormInfo = {
  title: "test-title",
  description: "description-test",
  priority: 2
}

/*********** Render and Smoke Tests ****************/

it("renders without crashing", function() {
  render(<TodoForm handleSave={TodoApp.create}/>);
})

it("matches snapshot", function() {
  const {container} = render(<TodoForm />);
  expect(container).toMatchSnapshot();
});

/*********** TEST STATE: formData ****************/

it("displays for with initial data", function () {
    const { container} = render(<TodoForm initialFormData={initialFormInfo}/>);
    
    const priorityDropDown = container.querySelector("#newTodo-priority");
    // fireEvent.click(priorityDropDown.querySelector(''));
    fireEvent.change(priorityDropDown, {target: {value : 1}});

    expect(container).toContainHTML("description-test");

    expect(priorityDropDown).toBeInTheDocument();
    expect(container).toContainHTML(`Ultra-Über`);
});

