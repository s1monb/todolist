import React, { useState, useEffect } from "react";
import RoundedTodo from "./components/RoundedTodo";
import Todo from "./components/Todo";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodo, setAddTodo] = useState(false);
  const [todos, setTodos] = useState(["Add todos by clicking the +"]);
  const [todoId] = useState(0);
  const [todosDone, setTodosDone] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    setTodos(
      JSON.parse(localStorage.getItem("tasks") || "[]") || [
        "Add todos by clicking the +",
      ]
    );
    setTodosDone(parseInt(localStorage.getItem("done") || "0"));
  }, [todoId]);

  return (
    <div className="App">
      <nav>
        <p
          onClick={() => {
            setTodosDone(0);
            localStorage.setItem("done", "0");
          }}
        >
          {todosDone}
        </p>

        <h1>Todo</h1>

        <i
          onClick={() => {
            setAddTodo(!showAddTodo);
            setError("");
          }}
          className={`fal fa-plus ${showAddTodo && "rotate45"}`}
        ></i>
      </nav>

      <div className={`${!showAddTodo && "hidden"}`}>
        <NewTodoForm setTodos={setTodos} setError={setError} />
      </div>

      <div className={`main-content ${showAddTodo && "smaller"}`}>
        <span>{error}</span>
        {todos.map((text, index) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            setTodosDone={setTodosDone}
            todosDone={todosDone}
            key={index}
          >
            {text}
          </Todo>
        ))}
      </div>
      <footer>
        <RoundedTodo>
          <i className="fal fa-toothbrush"></i>
        </RoundedTodo>
        <RoundedTodo>
          <i className="fal fa-dumbbell"></i>
        </RoundedTodo>
        <RoundedTodo>
          <i className="fal fa-books"></i>
        </RoundedTodo>
        <RoundedTodo>
          <i className="fal fa-comments"></i>
        </RoundedTodo>
        <RoundedTodo>
          <i className="fal fa-moon"></i>
        </RoundedTodo>
      </footer>
    </div>
  );
}

export default App;
