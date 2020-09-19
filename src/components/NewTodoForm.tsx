import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("tasks", JSON.stringify(todo));
    setTodo("");
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTodo(event.currentTarget.value);
  };
  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={todo}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default Todo;
