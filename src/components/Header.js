import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Header() {

  const navigate = useNavigate()
  const [ isOpen, setIsOpen ] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }}
      window.addEventListener('click', handleClickOutside);
      return () => window.removeEventListener('click', handleClickOutside);
    
    }, [dropdownRef])

  const toggleMenu = () => {
      setIsOpen(!isOpen)
  }


  return (
    <div className='grid grid-cols-3  text-6xl  bg-slate-500 p-5 select-none' >
      <p onClick={() => navigate("/")} className='col-start-2 text-center cursor-pointer ' >Blackrose Barbershop</p>
      <div className="relative justify-self-end" ref={dropdownRef}>
        <button
          onClick={() => toggleMenu()}
          className=" bg-gray-300 border-none text-gray-700 py-2 px-4 cursor-pointer "
        >
          #
        </button>
        {isOpen && (
          <ul className="absolute top-full right-0 bg-white border border-gray-300 list-none p-0 m-0 min-w-full">
            <li className="py-2 px-4 cursor-pointer" onClick={ () => navigate("/products")} >Products</li>
            <li className="py-2 px-4 cursor-pointer" onClick={ () => navigate("/about")} >About Us</li>
            <li className="py-2 px-4 cursor-pointer" onClick={ () => navigate("/profile-page")} >Profile</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header