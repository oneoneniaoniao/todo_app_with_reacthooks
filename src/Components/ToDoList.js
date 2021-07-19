import React, {useContext, useState} from 'react';

import ToDo from "./ToDo";
import AppContext from "../context/AppContext"

const ToDoList = ({status, lower}) => {
  const [reload, setReload] = useState(false)
  const {state} = useContext(AppContext)
  const thisTodos = state.todos.filter((todo) => todo.status === status)
  return (
    <div className="m-8">
      <h3 className="text-xl inline-block">{status}のToDo</h3>
      <table className="m-4 ">
      <thead className="">
          <tr>
            <th className="p-4 w-24">タイトル</th>
            <th className="p-4 w-64">内容</th>
            <th className="p-4 w-24">期限</th>
            <th className="p-4 w-24">作成日</th>
            {/* <th className="p-4">完了</th>
            <th className="p-4">編集</th>
            <th className="p-4">削除</th> */}
          </tr>
        </thead>
        <tbody>
          {thisTodos.map((todo, index) =>(
            <ToDo key={index} todo={todo} callback={setReload} reload={reload}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ToDoList
