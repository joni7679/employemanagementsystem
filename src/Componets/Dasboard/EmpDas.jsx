import React, { useEffect } from 'react';
import Header from '../Header';
import Tasklist from '../../TaskList/Tasklist';
import TasklistNumber from '../../others/TasklistNumber';


function EmpDas({ loginUser }) {
  useEffect(() => {
    if (loginUser) {
      // console.log("Employee Data Loaded", loginUser);
    }
  }, [loginUser]);

  return (
    <>
      {loginUser ? (
        <>
          <Header loginUser={loginUser} />
          <TasklistNumber loginUser={loginUser} />
          <Tasklist loginUser={loginUser} />
        </>
      ) : (
        <p>Loading employee data...</p>
      )}
    </>
  );
}

export default EmpDas;
