import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
export default function Login({ handleLogin}) {
    // console.log(handelLogin)
    let [email, setemail] = useState("")
    let [password, setPassword] = useState('')

    const Submithandeler = (event) => {
        console.log(event)
        event.preventDefault()
        handleLogin(email, password)
        setemail('')
        setPassword('')
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen  bg-gray-900">
                <div className="bg-gray-800  shadow-md rounded-lg px-8 py-10 w-96">
                    <h2 className="text-2xl font-semibold text-center mb-4 text-green-400">Welcome Back</h2>
                    <p className="text-center text-white mb-6">Enter your credentials to access your account.</p>
                    <form onSubmit={(event) => Submithandeler(event)}>
                        <div className="mb-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <MdOutlineEmail className='inline text-white' />
                                </span>
                                <input value={email} onChange={(event) => setemail(event.target.value)}
                                    className="appearance-none border rounded-md w-full py-2 px-3 pl-10  bg-gray-700 text-white  focus:outline-none focus:ring-2 focus:ring-green-400"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email" required
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    < RiLockPasswordFill className='inline text-white' />
                                </span>
                                <span className="absolute inset-y-0 right-2 flex items-center pl-3">
                                    <FaEyeSlash className='inline text-white' />
                                </span>
                                <input value={password} onChange={(event) => setPassword(event.target.value)}
                                    className="appearance-none border rounded-md w-full py-2 px-3 pl-10  bg-gray-700 text-white  focus:outline-none focus:ring-2 focus:ring-green-400"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password" required
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-600 w-full"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
