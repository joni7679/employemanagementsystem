import React from 'react'
import AcceptedTask from './AcceptedTask'
import CompleteTask from './CompleteTask'
import FaliedTask from './FaliedTask'
import NewTask from './NewTask'
export default function Tasklist({ loginUser }) {

    return (
        <>
            <div className='w-full mt-5 px-5'>
                <div className='w-full  rounded p-5   '>
                    <div className='container max-w-[1420px] mx-auto flex items-start px-5 justify-between   gap-2  '>

                        {loginUser.tasks.map((val, index) => {
                            if (val.active) {
                                return <AcceptedTask loginUser={val} key={index} />;
                            }
                            if (val.newTask) {
                                return <NewTask loginUser={val} key={index} />;
                            }
                            if (val.completed) {
                                return <CompleteTask loginUser={val} key={index} />;
                            }
                            if (val.failed) {
                                return <FaliedTask loginUser={val} key={index} />;
                            }
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
