import React from 'react'

export default function Hero() {
  return (
    <div className='flex p-5 gap-10 justify-between'>
        <div className="p-10 m-12 flex flex-col gap-2">
            <p className='text-2xl font-bold text-blue-600'><span  className='text-black'>Hi, i'm </span>Ani Happiness Adanma</p>
            <p className='text-2xl font-bold'>Frontend Developer</p>
            <p>High level experience in web design and <br /> development knowledge,  producing quality work </p>
            <div className="flex gap-5 pt-5 ">
                <button className='border-1 bg-blue-600 p-2 text-white text-sm rounded-sm cursor-pointer w-[100px] '>Hire Me</button>
                <button className='border-1 border-blue-600 text-sm rounded-sm cursor-pointer text-blue-600 w-[100px] '>See Projects</button>
            </div>
        </div>
        <div className="h-100 w-100 border-[10px] rounded-full border-blue-600">
  <img src="/me.JPG" alt="" className="object-fit rounded-full" />
</div>

        
    </div>
  )
}
