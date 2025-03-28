import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function open(){
    setIsMenuOpen(true)
  }
  function close(){
    setIsMenuOpen(false)
  }
  return (
    <div className='flex justify-around p-5'>
        <p className=' text-2xl font-bold'><span className='text-blue-600'>A</span>da.</p>
        <nav className='md:flex justify-between gap-7 hidden '>
            <a href='#'>Home</a>
            <a href='/About'>About Me</a>
            <a href='/Project'>Projects</a>
            <a href='/Skills'>Skills</a>
            <a href='/Contact'>Contact</a>
        </nav>
        {isMenuOpen ? (<MdCancel className='md:hidden flex cursor-pointer' onClick={close}
 />) :(<GiHamburgerMenu onClick={open}
 className='md:hidden flex cursor-pointer' />)
          
        
        }
        
        <div className={`absolute md:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
        <a href='#' className='w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</a>
            <a href='/About' className='w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>About Me</a>
            <a href='/Project' className='w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Projects</a>
            <a href='/Skills' className='w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Skills</a>
            <a href='/Contact' className='w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact</a>
        </div>
        <button className='border-1 bg-blue-600 p-2 text-white text-sm rounded-sm cursor-pointer  '>Let's Talk</button>

    </div>
  )
}
