import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

export default function CreatedTask() {
    const [userData, setUserData] = useContext(AuthContext);

    let [tasktitle, SetTasktitle] = useState('');
    let [date, SetDate] = useState('');
    let [assignTo, SetAssignTo] = useState('');
    let [category, SetCategory] = useState('');
    let [description, SetDescription] = useState('');
    let [CreateNewTask, SetCreateNewTask] = useState({});
    const SubmitHandeler = (e) => {
        e.preventDefault()
        if (!tasktitle || !date || !assignTo || !category || !description) {
            toast.error("Please fill out all fields before submitting the form.");
            return;
        }
        console.log("hello joni")
        console.log(
            tasktitle,
            date,
            assignTo,
            category,
            description,
        );

        SetCreateNewTask({
            tasktitle,date,assignTo,category, description, active: false, newTask: true, failed: false, completed: false
        })

        console.log(
            CreateNewTask
        )

        const data = userData;
        data.forEach((elem) => {
            console.log("hello")
            // console.log(elem)
            if (assignTo == elem.firstname.toLowerCase()) {
                // alert("correct user")
                console.log(elem.tasks)
                elem.tasks.push(CreateNewTask);
                elem.taskCount.newTask = elem.taskCount.newTask + 1;
                console.log(elem)
            }

        })

        setUserData(data)
        console.log(data)
        
        SetTasktitle('');
        SetDate('');
        SetAssignTo('');
        SetCategory('');
        SetDescription('');
    }

    return (
        <>
            <ToastContainer />
            <div className='container max-w-[1420px] mx-auto'>
                <div className="flex justify-center items-center min-h-screen bg-gray-900">

                    <form onSubmit={(e) => SubmitHandeler(e)} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Task Title */}
                            <div className="col-span-2">
                                <label className="text-gray-400">Task Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Make a UI design" value={tasktitle} onChange={(e) => SetTasktitle(e.target.value)}
                                    className="mt-1 p-2 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>

                            {/* Date */}
                            <div>
                                <label className="text-gray-400">Date</label>
                                <input
                                    type="date"
                                    name="date" value={date} onChange={(e) => SetDate(e.target.value)}
                                    className="mt-1 p-2 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>

                            {/* Assign To */}
                            <div>
                                <label className="text-gray-400">Assign to</label>
                                <input
                                    type="text"
                                    name="assignTo" value={assignTo} onChange={(e) => SetAssignTo(e.target.value)}
                                    placeholder="employee name"
                                    className="mt-1 p-2 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>

                            {/* Category */}
                            <div className="col-span-2">
                                <label className="text-gray-400">Category</label>
                                <input
                                    type="text"
                                    name="category" value={category} onChange={(e) => SetCategory(e.target.value)}
                                    placeholder="design, dev, etc"
                                    className="mt-1 p-2 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>

                            {/* Description */}
                            <div className="col-span-2">
                                <label className="text-gray-400">Description</label>
                                <textarea
                                    name="description"
                                    rows="4"
                                    placeholder="Task description" value={description} onChange={(e) => SetDescription(e.target.value)}
                                    className="mt-1 p-2 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                                >
                                    Create Task
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
