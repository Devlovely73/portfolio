import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-around p-5'>
        <p className=' text-2xl font-bold'><span className='text-blue-600'>A</span>da.</p>
        <nav className='flex justify-between gap-7'>
            <a href='#'>Home</a>
            <a href='/About'>About Me</a>
            <a href='/Project'>Projects</a>
            <a href='/Skills'>Skills</a>
            <a href='/Contact'>Contact</a>
        </nav>
        <button className='border-1 bg-blue-600 p-2 text-white text-sm rounded-sm cursor-pointer  '>Let's Talk</button>
    </div>
  )
}
