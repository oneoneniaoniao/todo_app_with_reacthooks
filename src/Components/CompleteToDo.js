import React, { useContext } from "react";
import {
  CREATE_TODO,
  DELETE_COMPLETE_TODO,
} from "../actions";
import { getYYYYMMDD } from "../utils";

import AppContext from "../context/AppContext";

const CompleteToDo = ({todo}) => {

  const { dispatch } = useContext(AppContext);
 const handleClickRestore = () => {
  dispatch({ type: DELETE_COMPLETE_TODO, id: todo.id });
  dispatch({
    type: CREATE_TODO,
    title: todo.title,
    body: todo.body,
    status: todo.status,
    deadline: todo.deadline,
    createdAt: todo.createdAt,
    id: todo.id,
  });
 }
 const handleClickDelete = () => {
   dispatch({type:DELETE_COMPLETE_TODO, id: todo.id});
 }

  return (
    <tr>
      <td>{todo.title}</td>
      <td className="text-center">{getYYYYMMDD(todo.deadline)}</td>
      <td className="text-center">{todo.completedAt}</td>
      <td>
        <button
          type="button"
          className="text-sm m-2 bg-green-500 text-white rounded-lg p-1 px-2  hover:bg-green-700"
          onClick={handleClickRestore}
        >
          戻す
        </button>
      </td>
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
  )
}

export default CompleteToDo
