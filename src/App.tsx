import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { ITodo } from "./interfaces/ITodoList";

import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/common/Navbar";
import AddNotes from "./components/addnotes/Index";
import Index from "./components/addnotes/Index";

const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        {/* <Route path="/addnotes" component={AddNotes} /> */}

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
