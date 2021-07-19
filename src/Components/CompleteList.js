import React, {useContext} from 'react';
import { DELETE_ALL_COMPLETE_TODOS } from "../actions";
import CompleteToDo from "./CompleteToDo";
import AppContext from "../context/AppContext"


const CompleteList = ({title}) => {
    const deleteAllCompleteTodos = (e) => {
      e.preventDefault();
      const result = window.confirm("全ての完了したTODOを本当に削除しても良いですか？");
      if (result) {
        dispatch({ type: DELETE_ALL_COMPLETE_TODOS });
      }
    };
  
    const {state, dispatch} = useContext(AppContext)

    return (
      <div className="m-12">
        <h3 className="text-2xl inline-block">{title}</h3>
                 <button className="text-sm ml-8 bg-red-300 text-white rounded-lg p-1 px-2 m-1 hover:bg-red-700" onClick={deleteAllCompleteTodos} disabled={state.completeTodos.length === 0}>全ての完了したToDoを削除する</button>
        <table className="m-4">
        <thead>
            <tr>
              <th className="p-4 w-24">タイトル</th>
              <th className="p-4 w-64">内容</th>
              <th className="p-4 w-24">期限</th>
              <th className="p-4 w-24">完了日</th>

            </tr>
          </thead>
          <tbody>
            {state.completeTodos.map((todo, index) =>(
              <CompleteToDo key={index} todo={todo}/>
            ))}
          </tbody>
        </table>
      </div>
    )  
}

export default CompleteList
