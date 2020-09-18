import React, { useState } from "react";

function Todo({ children }: any) {
  const [success, setTodo] = useState(false);

  return (
    <button
      onClick={() => setTodo(!success)}
      className={`todo ${success && "success"}`}
    >
      {children}
    </button>
  );
}

export default Todo;
