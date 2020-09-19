import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem("tasks", JSON.stringify(todo));
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    setTodo(event.target.value);
  };
  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder="Add a new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default Todo;
