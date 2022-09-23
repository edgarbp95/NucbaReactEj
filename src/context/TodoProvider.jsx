import { createContext, useState} from "react";

export const TodoContext = createContext()

const TodoProvider = (props) => {

    const [todos,setTodos] = useState([])

    const [state,setState] = useState()

  return (
    <TodoContext.Provider value={{todos,setTodos,state,setState}}>
    {props.children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
