import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center text-xl gap-10 bg-gray-900 text-gray-500 h-[50px]' >
      <NavLink to='/' className={({isActive})=>`${isActive ? 'bg-blue-800': 'bg-blue-400'} text-gray-200 px-2 py-1 rounded-lg hover:bg-blue-600`} >Home</NavLink>
      <NavLink to='/create-user' className={({isActive})=>`${isActive ? 'bg-blue-800': 'bg-blue-400'} text-gray-200 px-2 py-1 rounded-lg hover:bg-blue-600`}  >Create User</NavLink>
    </div>
  )
}

export default NavBar
