import React from 'react'
import {AiOutlineCheckSquare} from "react-icons/ai"
import {BiTrash} from "react-icons/bi"


const Todo = ({todo,modifyTodo,deleteTodo}) => {
  return (
    <div className='border-2 border-black w-80 p-4 mb-4 flex justify-between items-center sm:w-full'>
        <div>
            <p className='text-slate-500 font-bold'>{todo.nombre}</p>
            <p className=''>Estado: <span className={`${todo.estado === false ? "text-red-600" : "text-green-500"}`}>{todo.estado === false ? "Pendiente" : "Completado"}</span></p>
        </div>
        <div className='flex gap-2 '>
            <button onClick={()=>modifyTodo(todo.id)}>{<AiOutlineCheckSquare/>}</button>
            <button onClick={()=>deleteTodo(todo.id)}>{<BiTrash/>}</button>
        </div>
    </div>
  )
}

export default Todo
