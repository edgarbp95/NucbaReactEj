import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-5/6 flex sm:flex-col '>
      <div className='h-full w-3/6 bg-slate-600 flex flex-col gap-2 items-center justify-center sm:w-full sm:px-10 sm:text-center'>
        <h2 className='text-3xl font-bold text-yellow-500 mb-4 sm:text-2xl sm:mb-1'>To Do List</h2>
        <p className='text-yellow-500 font-medium text-sm sm:font-normal'>Agrega tus tareas y cambia el estado de pendiente a completado cuando hayas terminado.</p>
        <p className='text-yellow-500 font-medium text-sm sm:font-normal'>Tambien puedes eliminar una tarea o limpiar la lista por completo.</p>
        <p className='text-yellow-500 font-medium text-sm sm:font-normal'>Deja tu feedback si quieres que mejoremos algo.</p>
        <Link to="/todolist"> <button className='text-white bg-yellow-500 h-12 w-36 rounded-md mt-4 sm:mt-2 sm:w-28 sm:h-10 sm:text-sm'>Pruebalo YA!</button> </Link>
      </div>
      <div className='h-full w-3/6 bg-yellow-500 flex flex-col gap-2 items-center justify-center sm:w-full sm:px-10 sm:text-center'>
        <h2 className='text-3xl font-bold text-slate-600 mb-4 sm:text-2xl sm:mb-1'>PokeAPI</h2>
        <p className='text-slate-600 font-medium text-sm sm:font-normal'>¡Encuentra a tus pokemones favoritos!</p>
        <p className='text-slate-600 font-medium text-sm sm:font-normal'>Debes escribir el nombre completo y sin errores de ortografia.</p>
        <p className='text-slate-600 font-medium text-sm sm:font-normal'>Deja tu feedback si quieres que mejoremos algo.</p>
        <Link to="/pokeapi"> <button className='text-white bg-slate-600 h-12 w-36 rounded-md mt-4 sm:mt-2 sm:w-28 sm:h-10 sm:text-sm'>Pruebalo YA!</button> </Link>
      </div>
    </div>
  )
}

export default Home
