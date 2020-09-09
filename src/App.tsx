import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "./TextField";
import Counter from "./Counter";
import Display from "./Display";

function App() {
  const [counter, setCounter] = useState(50);
  const handleSubmit = () => setCounter(counter + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter handleSubmit={handleSubmit} counter={counter} />
        <Display message={counter} />
      </header>
    </div>
  );
}

export default App;
