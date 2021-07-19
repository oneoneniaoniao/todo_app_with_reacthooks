import React from "react";
import CreateNewTodo from "./CreateTodo";
import ToDoList from "./ToDoList";

const Home = () => {
  return (
    <>
      <CreateNewTodo />
      <hr />
      <ToDoList status="未着手" />
      <ToDoList status="進行中" />
    </>
  );
};

export default Home;
