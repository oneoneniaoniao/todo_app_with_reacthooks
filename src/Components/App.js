import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import CompleteList from "./CompleteList";
import AppContext from "../context/AppContext";
import reducer from "../reducers";
import {todoExamples, completeTodoExamples } from "../utils"

const APP_KEY = "myToDo";
const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : { todos: todoExamples, completeTodos: completeTodoExamples };
  // const initialState = {todos: [], completeTodos:[]}
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <nav className="bg-blue-400">
          <ul className="flex p-2 ml-12">
            <li className="hover:underline p-2 px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline p-2 px-4">
              <Link to="/complete">完了したToDo</Link>
            </li>
          </ul>
        </nav>
        <div className="m-2">
          <Route exact path="/" component={Home} />
          <Route path="/todo_app_with_reacthooks" component={Home} />
          <Route path="/complete" component={CompleteList} />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
