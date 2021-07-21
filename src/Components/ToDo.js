import React, { useContext, useState } from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import {
  ADD_COMPLETE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
} from "../actions";
import AppContext from "../context/AppContext";
import { today } from "../utils";
import { DeadlineGray } from "./Deadline";

const ToDo = ({ todo, callback, reload }) => {
  const { dispatch } = useContext(AppContext);
  const [title, setTitle] = useState(todo.title);
  const [body] = useState(todo.body);
  const [deadline, setDeadline] = useState(new Date(todo.deadline));
  const startDate = new Date();

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
      completedAt: today(),
    });
  };

  const handleClickDelete = () => {
    dispatch({ type: DELETE_TODO, id: todo.id });
  };

  const onChangeStatus = () => {
    dispatch({ type: CHANGE_STATUS, id: todo.id });
    reload === true ? callback(false) : callback(true);
  };

  const onSave = () => {
    dispatch({
      type: EDIT_TODO,
      id: todo.id,
      title: title,
      body: body,
      deadline: deadline,
      status: todo.status,
      createdAt: todo.createdAt,
    });
  };

  const onSaveDeadline = (props) => {
    dispatch({
      type: EDIT_TODO,
      id: todo.id,
      title: title,
      body: body,
      deadline: props.deadline,
      status: todo.status,
      createdAt: todo.createdAt,
    });
  };

  const handleChangeDeadline = (date) => {
    const newDeadline = new Date(date);
    setDeadline(newDeadline);
    console.log(deadline);
    onSaveDeadline({ deadline: newDeadline });
  };

  const remainingDays = Math.ceil(
    (deadline.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <tr>
        <td>
          <EditText value={title} onChange={setTitle} onSave={onSave} />
        </td>
        <td className={"text-center"}>
          <DeadlineGray
            startDate={startDate}
            deadline={deadline}
            handleChange={handleChangeDeadline}
          />
        </td>
        <td className="text-center">{remainingDays}日</td>
        <td className="text-center">
          <select
            className="cursor-pointer hover:bg-gray-100 p-1"
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
            className="text-sm mx-4 m-2 bg-green-500 text-white rounded-lg p-1 px-2  hover:bg-green-700"
            onClick={handleClickComplete}
          >
            完了
          </button>
        </td>
        <td>
          <button
            type="button"
            className="text-sm mx-4 m-2 bg-red-500 text-white rounded-lg p-1 px-2  hover:bg-red-700"
            onClick={handleClickDelete}
          >
            削除
          </button>
        </td>
      </tr>
    </>
  );
};

export default ToDo;
