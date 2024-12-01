// App.jsx
import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, { text: todoText, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
