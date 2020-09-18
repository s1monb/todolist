import React, { useState } from "react";
import RoundedTodo from "./components/RoundedTodo";
import Todo from "./components/Todo";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <nav>
        <h1>Todo</h1>

        <i
          onClick={() => {
            setModal(!modal);
          }}
          className="fal fa-plus"
        ></i>
      </nav>
      <div className="main-content">
        <Todo>Rydd rommet</Todo>
        <Todo>Kjøkkenvask</Todo>
        <div className="task-divider done">Ferdige:</div>
      </div>
      <footer>
        <RoundedTodo />
        <RoundedTodo />
        <RoundedTodo />
        <RoundedTodo />
        <RoundedTodo />
      </footer>
    </div>
  );
}

export default App;
