import React from "react";

import Todo from "./Todo";
import TodoForm from "./TodoForm";


/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {

  if (!todos.length) {
    return (
      <div className="empty-todos">
        <p>Please add some todos!</p>
      </div>
    );
  }
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return (
    <Todo
      title={top.title}
      id={top.id}
      description={top.description}
      priority={top.priority}
    />
  );
}

export default TopTodo;