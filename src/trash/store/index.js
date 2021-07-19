import React, {createContext, useReducer} from 'react'
import reducer from "../../reducers"

const initialState = {todos: [], completeTodos:[]}

export const Store = createContext({
  state: initialState,
  dispatch: () =>null,
});

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>
  )
}


