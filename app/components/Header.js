import React from 'react'

export const Header = () => {
  return (
    <div className='flex h-20 justify-between items-center bg-amber-300'>
      <div className='text-4xl font-semibold pl-20'>Hack<span className='text-4xl text-amber-800'>Drop</span></div>
      <div className=' flex gap-10 font-semibold  text-xl'>
        <span><a href="#">Home</a></span>
        <span><a href="#">Rules</a></span>
        <span><a href="#">Contact</a></span>
      </div>
      <div className='text-xl pr-20 '><span className='bg-amber-500 rounded-4xl cursor-pointer p-2 pl-4 pr-4'>Access Portal</span></div>
    </div>
  )
}
