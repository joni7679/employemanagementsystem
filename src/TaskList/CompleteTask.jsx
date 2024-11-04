import React from 'react'

export default function CompleteTask({loginUser}) {
    return (
        <>
            <div class="card  flex-shrink-0 max-w-sm shadow-lg rounded-lg bg-[#4ADE80] px-[25px] py-[10px]">
                <div className='flex  justify-between capitalize'>
                    <h3 className='px-[25px] py-[15px] rounded bg-red-500 text-white'>
                    {loginUser.category}
                    </h3>
                    <h2 className='px-[25px] py-[15px] rounded  text-white'>{loginUser.taskDate}</h2>
                </div>
                <div className='mt-5'>
                    <p className='text-white text-xl font-semibold'>{loginUser.taskTitle}</p>
                    <span className='des text-white'>
                    {loginUser.taskDescription}
                    </span>
                    <div className='flex items-center gap-2 mt-5'>
                        <button className='bg-green-900 text-white rounded px-2 py-1 capitalize'> Completed task</button>
                    </div>
                </div>
            </div>

        </>
    )
}
