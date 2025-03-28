import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className=' bg-gray-50 w-full h-screen p-0 m-0'>
      <Navbar />
      <Hero />
      {/* <div className="h-[200px] w-[200px] bg-red-500 border rounde-sm m-10 animate-spin"></div> */}
      
    </div>
  )
}

export default App