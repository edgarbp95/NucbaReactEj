import React, { useState } from 'react'


const Todoform = ({addTodo,deleteAll}) => {

    const initialState = {
        nombre:"Tarea 1",
        estado: "Pendiente",
    }

    const [todo,setTodo] = useState(initialState)

    const handleChange = (e) =>{
        const {name,value,checked,type} = e.target
        setTodo((old)=>({
            ...old,
            [name]:type === "checkbox" ? checked : value
        }))
    }

    const handleSubmit = (e)=>{
        
        addTodo({
            nombre:todo.nombre,
            estado:todo.estado === "Pendiente" ? false : true,
            id: Date.now()
        })
    }
    
  return (
    <div className='flex gap-3 mt-24 ml-32'>
       
        <input className='border-2 border-black p-2' type="text" name='nombre' placeholder='Ingrese una tarea...' value={todo.nombre} onChange={handleChange} />
        <select className='border-2 border-black p-2' name="estado" id="state" value={todo.estado} onChange={handleChange}>
            <option value="Pendiente">Pendiente</option>
            <option value="Completado">Completado</option>
        </select>
        <button className='bg-green-600 text-white p-2 w-32' onClick={handleSubmit}>Agregar tarea</button>
        <button className='bg-red-600 text-white p-2 w-32' onClick={deleteAll}>Limpiar lista</button>
     
    </div>
  )
}

export default Todoform
