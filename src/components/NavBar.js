import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {

  const navigate = useNavigate()

  return (
    <div>
      <button type='button' onClick={ () => navigate("/products")} className='bg-blue-500 rounded p-1 m-2' >products</button>
      <button onClick={ () => navigate("/about")} >About</button>
      <button onClick={ () => navigate("/profile-page")} >profile</button>
    </div>
  )
}

export default NavBar