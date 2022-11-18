import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
import { TODO_4, TODO_5} from './testData';
import TodoApp from "./TodoApp";


TodoApp.update = jest.fn();
TodoApp.remove = jest.fn();


/*********** Render and Smoke Tests ****************/

it("renders without crashing", function() {
  render(<EditableTodoList todos={[TODO_4]} update={TodoApp.update} remove={TodoApp.remove} />);
})

it("matches snapshot", function() {
  const {container} = render(<EditableTodoList todos={[TODO_5]} />);
  expect(container).toMatchSnapshot();
});

/*********** TEST DISPLAY ****************/
it("displays all todos", function () {
    const {container } = 
        render(<EditableTodoList 
                    todos={[TODO_4, TODO_5]} 
                    update={TodoApp.update} 
                    remove={TodoApp.remove}
                />
    );

    expect(container).toContainHTML("test description5");
    expect(container).toContainHTML("test description4");
    expect(container).not.toContainHTML("test description1");
});
