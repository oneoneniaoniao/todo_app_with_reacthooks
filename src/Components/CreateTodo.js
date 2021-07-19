import React, { useContext, useState } from "react";
import { CREATE_TODO } from "../actions";
import AppContext from "../context/AppContext";
import { today, getYYYYMMDD } from "../utils";
import Deadline from "./Deadline";
import {DELETE_ALL_TODOS} from "../actions"

const CreateTodo = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("未着手");
  const [deadline, setDeadline] = useState(getYYYYMMDD(new Date()));
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date) => {
    setDeadline(getYYYYMMDD(date));
    setStartDate(date);
  };

  const createTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_TODO,
      title,
      body,
      status,
      deadline,
      createdAt: today(),
    });
    setTitle("");
    setBody("");
    setStatus("未着手");
    setDeadline(getYYYYMMDD(new Date()));
    setStartDate(new Date());
  };

  const deleteAllTodos = (e) => {
    e.preventDefault();
    const result = window.confirm(`全てのTODOを本当に削除しても良いですか？`);
    if (result) {
      dispatch({ type: DELETE_ALL_TODOS });
    }
  };

  const unCreatable = title === "" || body === "" ? "disabled" : "";

  return (
    <div className="m-8">
      <h3 className="text-2xl">新規作成</h3>
      <form>
        <div className="inline-block m-4">
          <label htmlFor="title">タイトル: </label>
          <input
            className="bg-blue-100 rounded-lg p-1"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inline-block m-4">
          <label htmlFor="body">内容: </label>
          <input
            className="bg-blue-100 rounded-lg w-96 p-1"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="inline-block m-4">
          <label htmlFor="status">状態: </label>
          <select
            className="bg-blue-100 rounded-lg p-1"
            defaultValue="未着手"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option id="status" value="未着手">
              未着手
            </option>
            <option id="status" value="進行中">
              進行中
            </option>
          </select>
        </div>
        <Deadline startDate={startDate} handleChange={handleChange} />
        <div className="flex justify-end">
          <button
            className="text-md ml-8 disabled:opacity-50 bg-blue-600 text-white rounded-lg p-1 px-8 "
            disabled={unCreatable}
            onClick={createTodo}
          >
            新規作成
          </button>
          <button
            className="text-md ml-8 disabled:opacity-50 bg-red-600 text-white rounded-lg px-2  p-1"
            onClick={deleteAllTodos}
            disabled={state.todos.length === 0}
          >
            全てのToDoを削除する
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
