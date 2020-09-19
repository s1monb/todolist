import React, { useState, useEffect } from "react";

function RoundedTodo({ children, id }: any) {
  const [success, setTodo] = useState(false);

  const toggle = () => {
    if (!success) {
      const today = new Date();
      localStorage.setItem(id, today.toDateString());
    } else {
      localStorage.removeItem(id);
    }
  };

  useEffect(() => {
    const today = new Date();
    if (localStorage.getItem(id) === today.toDateString()) {
      setTodo(true);
    }
  }, [id]);

  return (
    <button
      onClick={() => {
        setTodo(!success);
        toggle();
      }}
      className={`rounded-todo ${success && "rounded-success"}`}
    >
      {children}
    </button>
  );
}

export default RoundedTodo;
