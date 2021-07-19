import {combineReducers} from 'redux'
import todos from "./todos"
import completeTodos from "./completeTodos"

export default combineReducers({todos, completeTodos})