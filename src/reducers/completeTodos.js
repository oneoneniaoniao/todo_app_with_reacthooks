import { ADD_COMPLETE_TODO, DELETE_COMPLETE_TODO, DELETE_ALL_COMPLETE_TODOS} from "../actions";

const completeTodos = (state = [], action) => {
  switch (action.type){
    case ADD_COMPLETE_TODO:
      const completeTodo = {
        title: action.title,
        body: action.body,
        status: action.status,
        deadline: action.deadline,
        createdAt: action.createdAt,
        id: action.id,
        completedAt: action.completedAt,
      }
      return [...state, {...completeTodo}]

      case DELETE_COMPLETE_TODO:
        return state.filter((todo)=>todo.id !== action.id)

      case DELETE_ALL_COMPLETE_TODOS: 
      return [];

      default:
        return state

  }
}

export default completeTodos;