import React from 'react'

export const Dashboard = () => {
  return (
    <div className='text-white border m-30 mb-0 flex justify-evenly'>
      <div className='flex flex-col  bg-amber-600 gap-2 w-130 items-center p-5 rounded-lg'>
        <span className='text-2xl font-semibold mb-3'>PROJECT SUBMISSION</span>
        <input type="text" placeholder='TeamName' className='w-120 border placeholder-white rounded-md p-1' />
        <input type="text" placeholder='ProjectTitle' className='w-120 border placeholder-white rounded-md p-1' />
        <input type="text" placeholder='Problem Statement' className='w-120 border placeholder-white rounded-md p-1' />
        <input type="text" placeholder='GitHub / Demo Link (URL)' className='w-120 border placeholder-white rounded-md p-1' />
        <button className=' text-white w-40 rounded-md bg-amber-900 p-2 cursor-pointer'>Submit Project</button>
      </div>

      <div className='flex bg-amber-600 gap-2 w-130  p-5 rounded-lg justify-between'>
        <div className='flex flex-col gap-4'>
          <span className='text-2xl font-semibold mb-3'>LIVE RANKINGS</span>
          <div className='flex gap-2'>
            <span className='text-5xl'>#1</span>
            <div className='flex flex-col'>
              <span>Team Name</span>
              <span>Project Title</span>
            </div>
          </div>
          <div className='flex gap-2'>
            <span className='text-5xl'>#2</span>
            <div className='flex flex-col'>
              <span>Team Name</span>
              <span>Project Title</span>
            </div>
          </div>
          <div className='flex gap-2'>
            <span className='text-5xl'>#3</span>
            <div className='flex flex-col'>
              <span>Team Name</span>
              <span>Project Title</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 rounded-lg items-end'>
          <span>SCORE</span>
          <div className='flex flex-col gap-14'> 
            <span>N/A</span>
            <span>N/A</span>
            <span>N/A</span>
          </div>
         
        </div>
      </div>
    </div>
  )
}
