import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({todo, update, remove}) {
  const [edit, setEdit] = useState(false);

  /** Toggle if this is being edited
   * Sets state to opposite of previous state
   * Returns nothing. */
  function toggleEdit() {
    setEdit(e => !e); //flip it to do the opposite. can delete the top two.
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update(formData);
  }

  return (
    <div className="EditableToDo">
      {edit
        ? (<TodoForm
            initialFormData={todo}
            handleSave={handleSave}/>)
        : (<div className="mb-3">
            <div className="float-end text-sm-end">
              <button
                  className="EditableTodo-toggle btn-link btn btn-sm"
                  onClick={toggleEdit}>
                Edit
              </button>
              <button
                  className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                  onClick={handleDelete}>
                Del
              </button>
            </div>
                  <div>
                  <Todo
                    key={todo.id}
                    title={todo.title}
                    description={todo.description}
                    priority={todo.priority} />
                </div>
          </div>)
      }
    </div>
  );
}

export default EditableTodo;
