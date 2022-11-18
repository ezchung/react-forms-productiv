import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority  //TODO: put a guard condition to return null
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