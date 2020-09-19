import React, { useState } from "react";
import RoundedTodo from "./components/RoundedTodo";
import Todo from "./components/Todo";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodo, setAddTodo] = useState(false);
  return (
    <div className="App">
      <nav>
        <h1>Todo</h1>

        <i
          onClick={() => {
            setAddTodo(!showAddTodo);
          }}
          className={`fal fa-plus ${showAddTodo && "rotate45"}`}
        ></i>
      </nav>

      <div className={`${!showAddTodo && "hidden"}`}>
        <NewTodoForm />
      </div>

      <div className={`main-content ${showAddTodo && "smaller"}`}>
        <Todo>Rydd rommet</Todo>
        <Todo>Kjøkkenvask</Todo>
        <div className="task-divider done">Ferdige:</div>
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
