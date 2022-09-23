import React from 'react'

const PokeCard = ({pokeImg,pokeType,pokeName}) => {
  return (
    <div className='bg-slate-600 mt-20 pt-10 pb-20 flex items-center flex-col'>
        <div>
            <img className='w-40' src={pokeImg} alt="" />
        </div>
        <div className='text-center'>
            <h2 className='uppercase tracking-widest text-xl font-bold text-white'>{pokeName}</h2>
            <p className='text-white'>Tipo: {pokeType}</p>
        </div>
      
    </div>
  )
}

export default PokeCard
