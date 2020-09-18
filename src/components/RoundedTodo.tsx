import React, { useState } from "react";

function RoundedTodo() {
  const [success, setTodo] = useState(false);

  return (
    <button
      onClick={() => setTodo(!success)}
      className={`rounded-todo ${success && "rounded-success"}`}
    ></button>
  );
}

export default RoundedTodo;
