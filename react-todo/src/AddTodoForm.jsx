// AddTodoForm.jsx
import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText); // Calls the addTodo function passed as a prop
      setTodoText(""); // Clear the input after submitting
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Enter a new todo"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
