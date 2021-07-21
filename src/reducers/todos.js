import { v4 as uuidv4 } from "uuid";
import {
  CREATE_TODO,
  CHANGE_STATUS,
  DELETE_TODO,
  DELETE_ALL_TODOS,
  EDIT_TODO,
} from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      const todo = {
        title: action.title,
        body: action.body,
        status: action.status,
        deadline: action.deadline,
        createdAt: action.createdAt,
        id: uuidv4(),
      };
      return [...state, todo];
    case CHANGE_STATUS: 
    const index = state.findIndex((todo) => todo.id === action.id);
    const[ targetToDo] = state.splice(index, 1);
    const leftovers = state.filter((todo) => todo.id !== action.id);
    targetToDo.status === "未着手" ? targetToDo.status = "進行中" : targetToDo.status = "未着手"
    return [...leftovers, targetToDo]

    case EDIT_TODO:
      const editedTodo = {
        title: action.title,
        body: action.body,
        status: action.status,
        deadline: action.deadline,
        createdAt: action.createdAt,
        id: action.id,
      };
      const newState = state.map((todo) => {
        if (todo.id === action.id) {
          return editedTodo;
        } else {
          return todo;
        }
      });
      return newState;

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case DELETE_ALL_TODOS:
      return [];

    default:
      return state;
  }
};

export default todos;
