import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo1", complete: true }])
  return (
    // The below fragment element allows you to return multiple elements in one rfc
    <>
      < TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to complete; Good Job!</div>
    </>
  )
}

export default App;