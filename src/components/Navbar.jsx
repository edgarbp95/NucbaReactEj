import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineAlert} from "react-icons/ai"
import { TodoContext } from '../context/TodoProvider'
import { useEffect } from 'react'

const Navbar = () => {

    const {todos,state,setState} =useContext(TodoContext)

    useEffect(()=>{
            
      for(let todo in todos){
        if(todos[todo].estado===false){
            setState(false)
            return
        }else{
            setState(true)
        }
      }

    },[todos])

    console.log(todos)

    const prueba = <p className='flex gap-1 items-center text-red-500'><AiOutlineAlert/> Tareas Pendientes</p>;
    

  return (
    <div className='w-full bg-gray-800 text-white font-semibold flex gap-10 h-1/6 items-center justify-center px-28 sm:px-0 sm:text-sm sm:gap-6'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todolist">{state === false ? prueba : "Lista de Tareas"}</NavLink>
      <NavLink to="pokeapi">PokeAPI</NavLink>
    </div>
  )
}

export default Navbar
