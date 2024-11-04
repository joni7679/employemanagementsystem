import React from 'react'


export default function TasklistNumber({ loginUser }) {
   
    return (
        <>

            <div className='w-full px-5 mt-5 flex items-center justify-between flex-wrap gap-2'>
                <div className='container max-w-[1420px] mx-auto flex items-start px-5 justify-between   gap-2 overflow-hidden'>
                    <div className='card w-[300px] shadow-lg rounded-lg bg-blue-400 px-[25px] py-[10px] flex items-center justify-center flex-col'>
                        <h2 className='text-3xl capitalize text-white'>{loginUser.taskCount.newTask}</h2>
                        <h2 className='text-3xl capitalize text-white'>new task</h2>
                    </div>
                    <div className="card w-[300px] shadow-lg rounded-lg bg-green-400 px-[25px] py-[10px] flex items-center justify-center flex-col"><h2 class="text-3xl capitalize text-white">{loginUser.taskCount.completed}</h2><h2 class="text-3xl capitalize text-white">completed  task</h2></div>

                    <div className="card w-[300px] shadow-lg rounded-lg bg-yellow-400 px-[25px] py-[10px] flex items-center justify-center flex-col"><h2 class="text-3xl capitalize text-black">{loginUser.taskCount.accepted}</h2><h2 class="text-3xl capitalize text-black">accepted task</h2></div>

                    <div className="card w-[300px] shadow-lg rounded-lg bg-red-400 px-[25px] py-[10px] flex items-center justify-center flex-col"><h2 class="text-3xl capitalize text-white">{loginUser.taskCount.failed}</h2><h2 class="text-3xl capitalize text-white">failed task</h2></div>
                </div>
            </div>
        </>)
}
