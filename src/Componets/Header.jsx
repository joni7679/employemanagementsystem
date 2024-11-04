import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Header({ loginUser }) {

    const LogOutUser = () => {
        // Show confirmation dialog
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        
        if (confirmLogout) {
            // Proceed with logout
            localStorage.setItem("loginUser", '');
            window.location.reload();
            // props.changeUser('')
        } else {
            // If the user cancels, do nothing
            console.log("User canceled logout");
        }
    }
    

    return (
        <>
        <ToastContainer/>
            <div className='w-full p-5 bg-gray-600  capitalize text-white'>
                <div className='container max-w-[1420px] mx-auto flex items-start px-5 justify-between'>
                    <div>
                        <h1>Welcome</h1>
                    </div>
                    <div>
                        <h1>User name: {loginUser ? loginUser.firstname : "Admin  👋"}</h1>
                    </div>
                    <div>
                        <button onClick={LogOutUser} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-[10px] px-[25px] rounded'>Log out</button>
                    </div>
                </div>
            </div>
        </>
    );
}
