import React, { useState } from 'react';
import Header from '../Header';
import CreatedTask from '../../others/CreatedTask';
import AllTask from '../../others/AllTask';

export default function AdminDas({loginUser}) {

    return (
        <>
            <Header  loginUser={loginUser}/>
            <CreatedTask />
            <AllTask />
        </>
    );
}
