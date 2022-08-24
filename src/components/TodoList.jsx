import React, { useEffect, useState } from 'react'
import Todo from './Todo'

import Todoform from './Todoform'

const TodoList = () => {

    const [todos,setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((old)=> [...old,todo] )
    }
    
    console.log(todos)

    const deleteAll = () =>{
        setTodos([])
    }
    
    const deleteTodo = (id) =>{
        setTodos((old)=> old.filter((todo)=>todo.id !== id))
    }

    const modifyTodo = (id) =>{
        const modTodo = todos.map((item)=>
            item.id === id ? {...item, estado:!item.estado} : item
        )
        setTodos(modTodo)
    }

    useEffect(()=>{
        if(localStorage.getItem("todos")){
            setTodos(JSON.parse(localStorage.getItem("todos")))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

  return (
    <>
      <Todoform addTodo={addTodo} deleteAll={deleteAll}/>
      <div className='w-full h-96 mt-10 ml-32'>
        {todos.map((item)=>(
            <Todo key={item.id} todo={item} modifyTodo={modifyTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </>
  )
}

export default TodoList
