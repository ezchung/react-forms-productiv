import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";


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

  const initialFormInfo = {
    title: "",
    description: "",
    priority: 2
  } //TODO: Can move this todo app. Assign to default

  console.log("TODOAPP todos ----->", todos)

  /** add a new todo to list */ 
  function create(newTodoInfo) {
    //Takes in information
    let id = uuid();
    let newTodo = {...newTodoInfo, id: id}; //TODO: id: id ==> , id
    setTodos(todo => [...todo, newTodo]);   //Give todo name todos. Not singular
  }

  /** update a todo with updatedTodoInfo */ 
  function update(updatedTodoInfo) {
    let updateTodo = {...updatedTodoInfo};
    let updatingTodos = todos.filter(todo => todo.id !== updateTodo.id); 
    setTodos(todo => [...updatingTodos, updateTodo]); //Rename old state to plural
  }

  /** delete a todo by id */ 
  function remove(id) {
    let filterTodos = todos.filter(todo => todo.id !== id); 
    setTodos(todo => [...filterTodos]); //Rename old state to plural
  }


  return (
      <main className="TodoApp">
        <div className="row">


          <div className="col-md-6">
            {todos.length < 1
              ? <span className="text-muted">You have no todos.</span>
              : <><h1>Todos</h1>
              <EditableTodoList
                  todos={todos}
                  update={update}
                  remove={remove}/>  </>}
          </div>

          <div className="col-md-6">
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos}/>
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm initialFormData={initialFormInfo} handleSave={create}/>
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;