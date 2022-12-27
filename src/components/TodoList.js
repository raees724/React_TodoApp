import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button style={{background:"black" ,color:"red"}} onClick={() => handleEdit(t.id)}><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
          <button style={{background:"black" ,color:"red"}} onClick={() => handleDelete(t.id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;