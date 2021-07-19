import React, { useContext } from "react";
import {
  ADD_COMPLETE_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
} from "../actions";
import AppContext from "../context/AppContext";
import { today } from "../utils";

const ToDo = ({ todo, callback, reload }) => {
  const { dispatch } = useContext(AppContext);

  const handleClickComplete = () => {
    dispatch({ type: DELETE_TODO, id: todo.id });
    dispatch({
      type: ADD_COMPLETE_TODO,
      title: todo.title,
      body: todo.body,
      status: todo.status,
      deadline: todo.deadline,
      createdAt: todo.createdAt,
      id: todo.id,
      completedAt: today()
    });
  };
  // const handleClickEdit = () => {
  //   dispatch({
  //     type: EDIT_TODO,
  //     title: todo.title,
  //     body: todo.body,
  //     status: todo.status,
  //     deadline: todo.deadline,
  //     createdAt: todo.createdAt,
  //     id: todo.id,
  //   });
  // };
  const handleClickDelete = () => {
    const result = window.confirm(`本当に"${todo.title}"を削除しますか？`);
    if (result) {
      dispatch({ type: DELETE_TODO, id: todo.id });
    }
  };

  const onChangeStatus = () => {
    dispatch({ type:CHANGE_STATUS, id: todo.id });
    reload===true?callback(false):callback(true)
  };

  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.body}</td>
      <td className="text-center">{todo.deadline}</td>
      <td className="text-center">{todo.createdAt}</td>
      <td className="text-center">
        <select
          className="bg-blue-100 rounded-lg p-1"
          defaultValue={todo.status}
          onChange={onChangeStatus}
        >
          <option id="status" value="未着手">
            未着手
          </option>
          <option id="status" value="進行中">
            進行中
          </option>
        </select>
      </td>
      <td>
        <button
          type="button"
          className="text-sm m-2 bg-green-500 text-white rounded-lg p-1 px-2  hover:bg-green-700"
          onClick={handleClickComplete}
        >
          完了
        </button>
      </td>
      {/* <td>
        <button
          type="button"
          className="text-sm m-2 bg-blue-500 text-white rounded-lg p-1 px-2  hover:bg-blue-700"
          onClick={handleClickEdit}
        >
          <Link to="/edit">編集</Link>
        </button>
      </td> */}
      <td>
        <button
          type="button"
          className="text-sm m-2 bg-red-500 text-white rounded-lg p-1 px-2  hover:bg-red-700"
          onClick={handleClickDelete}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default ToDo;
