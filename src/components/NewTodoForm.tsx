import React, { useState } from "react";

function Todo({ setTodos, setError }: any) {
  const [todo, setTodo] = useState("");

  const isDuplicate = (arr: string[]) => {
    const ok = arr.filter((child: any) => {
      return child === todo;
    });
    if (ok > []) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const tasks: [string] = JSON.parse(localStorage.getItem("tasks") || "[]");

    if (isDuplicate(tasks)) {
      setError("Taskname already taken");
    } else {
      if (todo == "") {
        setError("Taskname cannot be empty");
      } else {
        setError("");
        tasks.push(todo);
        setTodos(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setTodo("");
      }
    }
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
