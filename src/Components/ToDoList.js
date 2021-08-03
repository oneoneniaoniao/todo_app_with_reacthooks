import React, {useContext, useState} from 'react';

import ToDo from "./ToDo";
import AppContext from "../context/AppContext"

const ToDoList = ({status}) => {
  const [reload, setReload] = useState(false)
  const {state} = useContext(AppContext)
  const thisTodos = state.todos.filter((todo) => todo.status === status)
  return (
    <div className="m-8">
      <h3 className="text-xl inline-block">{status}のToDo</h3>
      <table className="m-4 ">
      <thead className="">
          <tr>
            <th className="px-4 p-2 w-48">タスク</th>
            <th className="px-4 p-2 w-48 ">期限</th>
            <th className="px-4 p-2 w-24">残り</th>
            <th className="px-4 p-2 w-24">状態</th>
          </tr>
        </thead>
        <tbody>
          {thisTodos.map((todo) =>(
            <ToDo key={todo.id} todo={todo} callback={setReload} reload={reload}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ToDoList
