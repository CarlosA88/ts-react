import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { ITodo } from "./interfaces/ITodoList";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewTodo addTodo={todoAddHandler} />
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
      </header>
    </div>
  );
}

export default App;
