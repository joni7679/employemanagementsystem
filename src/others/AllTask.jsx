import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function AllTask() {
    const [userData,setUserData]= useContext(AuthContext);
    console.log(userData)

    return (
        <>
            <div className='container max-w-[1420px] mx-auto'>
                <div className='px-5 bg-gray-900'>
                    <div class="task-card w-full p-5 rounded bg-blue-400 text-white capitalize "><div class="flex items-center justify-between"><h4 className='w-1/5  capitalize'>employees name</h4>
                        <h5 className='w-1/5  capitalize'>new task</h5>
                        <h5 className='w-1/5  capitalize'>active  task</h5>
                        <h5 className='w-1/5  capitalize'>complete task</h5>
                        <h5 className='w-1/5  capitalize '>falied</h5>
                    </div></div>
                    <div className="task-container h-52 bg-gray-700 rounded flex items-center justify-center flex-col gap-3 overflow-auto">
                        {userData.map((empdata, index) => {
                            return <div className='task-card w-full p-5 rounded bg-gray-700 text-white capitalize ' key={index} >
                                <div className='flex items-center justify-between' >
                                    <h4 className='w-1/5 text-white'>
                                        {empdata.firstname}
                                    </h4>
                                    <h5 className='w-1/5 text-blue-500 capitalize'>{empdata.taskCount.newTask}</h5>
                                    <h5 className='w-1/5 text-yellow-400 capitalize'>{empdata.taskCount.active}</h5>
                                    <h5 className='w-1/5 text-green-500 capitalize'>{empdata.taskCount.completed}</h5>
                                    <h5 className='w-1/5 text-red-500 capitalize '>{empdata.taskCount.failed}</h5>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
