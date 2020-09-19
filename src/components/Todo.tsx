import React from "react";

function Todo({ children, setTodos, todos, setTodosDone }: any) {
  const done = () => {
    const lsDone: number = parseInt(localStorage.getItem("done") || "0");
    const text = children;
    todos = todos.filter((todo: any) => {
      return todo !== text;
    });
    setTodos(todos);
    localStorage.setItem("tasks", todos);
    setTodosDone(lsDone + 1);
    localStorage.setItem("done", (lsDone + 1).toString());
  };

  return (
    <button onClick={done} className="todo">
      {children}
    </button>
  );
}

export default Todo;
