import React from 'react'

export default function AcceptedTask({ loginUser }) {
  console.log(loginUser)
  return (
    <>
      <div class="card  flex-shrink-0 max-w-sm shadow-lg rounded-lg bg-[#FACC15] px-[25px] py-[10px]">
        <div className='flex  justify-between capitalize'>
          <h3 className='px-[25px] py-[15px] rounded bg-red-400 text-black'>
            {loginUser.category}
          </h3>
          <h2 className='px-[25px] py-[15px] rounded  text-black'>{loginUser.taskDate}</h2>
        </div>
        <div className='mt-5'>
          <p className='text-black text-xl font-semibold'>{loginUser.taskTitle}</p>
          <span className='des text-black'>
            {loginUser.taskDescription}
          </span>
          <div className='flex items-center gap-2 mt-5'>
            <button className=' text-black rounded px-2 py-1 capitalize  font-semibold'>accepted task</button>
          </div>
        </div>
      </div>
    </>
  )
}
