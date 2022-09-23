import React, { useState } from 'react'
import Swal from 'sweetalert2'
import PokeCard from './PokeCard';

const PokeApi = () => {

    const [personajes, setPersonajes] = useState([]);
    const [input, setInput] = useState();


    const obtenerPersonajes = async (nombre) => {
        try {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nombre}`
            );

            const data = await res.json();

            setPersonajes(data)

        } catch (error) {
            console.log(error)
            Swal.fire({
                title: 'Error',
                text: 'Personaje no encontrado',
                icon: 'error',
                confirmButtonText: 'Volver a intentar'
            })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!input.trim()){
            Swal.fire({
              title: 'Error',
              text: 'Ingrese un personaje',
              icon: 'error',
              confirmButtonText: 'Volver a intentar'
          })}

          obtenerPersonajes(input.trim().toLowerCase())
    }

  return (
    <div>
        <form action="" className='flex gap-4' onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder='¿Qué pokemon buscas?' value={input} onChange={(e)=>{setInput(e.target.value)}} className='border-2 border-slate-600 px-4 py-1'/>
            <button type='submit' className='w-16 text-slate-600 rounded-md font-medium bg-yellow-500'>GO</button>
        </form>
        {personajes != "" ? <PokeCard pokeImg={personajes.sprites.front_default} pokeName={personajes.name} pokeType={personajes.types[0].type.name}/> : ""}

    </div>
  )
}

export default PokeApi
