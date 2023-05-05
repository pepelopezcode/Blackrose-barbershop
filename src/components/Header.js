import React from 'react'
import { useNavigate } from 'react-router-dom'

function Title() {

  const navigate = useNavigate()

  return (
    <div className='grid justify-items-center text-3xl bg-slate-500 p-5' >
      <p onClick={ () => navigate("/")} className='cursor-pointer' >Blackrose Barbershop</p>
      </div>
  )
}

export default Title