import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    // The below fragment element allows you to return multiple elements in one rfc
    <>
      < TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to complete; Good Job!</div>
    </>
  )
}

export default App;