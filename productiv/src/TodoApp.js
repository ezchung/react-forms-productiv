import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */ //TODO: 
  function create(newTodoInfo) {
    //Takes in information
    let newTodo = {...newTodoInfo, id: uuid()};
    setTodos(todo => [...todo, newTodo]);
  }

  // <Todo 
  //             title={title} 
  //             description={description} 
  //             priority={priority} 
  //             id = {uuid()}
  //           />

  /** update a todo with updatedTodo */ //TODO: 
  function update(updatedTodo) {
  }

  /** delete a todo by id */ //TODO: 
  function remove(id) {
  }


  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            <EditableTodoList /> OR
            <span className="text-muted">You have no todos.</span>
          </div>

          <div className="col-md-6">
            (if no top todo, omit this whole section)
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo />
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm handleSave={create}/>
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;