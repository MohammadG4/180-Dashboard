import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

const Nav = () => {
  return (
<nav className='flex flex-col items-center fixed self-start bg-[#1f1f1f] min-h-screen w-[20vw] gap-7 mb-1 pt-5'>
  <img src={logo} alt="180 Logo"  className='w-[30%]'/>
  <NavLink to="/" className="text-white rounded-[3px] w-[18vw] h-[40px] text-lg px-2"><button className='h-[40px]'>Dashboard</button></NavLink>
  <NavLink to="/data" className='text-white rounded-[3px] w-[18vw] h-[40px] mt-[-20px] text-lg px-2'><button className='h-[40px]' >Data</button></NavLink>
</nav>  
)
}

export default Nav