import React, { useState } from "react";

function RoundedTodo({ children }: any) {
  const [success, setTodo] = useState(false);

  return (
    <button
      onClick={() => setTodo(!success)}
      className={`rounded-todo ${success && "rounded-success"}`}
    >
      {children}
    </button>
  );
}

export default RoundedTodo;
