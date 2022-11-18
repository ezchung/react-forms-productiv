import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({id, title, description, priority}) {
  console.log("title--->", title)
  console.log("desc--->", description)
  console.log("priority--->", priority)
  return (
      <div className="Todo">
        <div><b>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}
//TODO:

export default Todo;