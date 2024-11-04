import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './Componets/Auth/Login';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './Context/AuthContext';
import AdminDas from './Componets/Dasboard/AdminDas';
import EmpDas from './Componets/Dasboard/EmpDas';


function App() {
  const [user, setUser] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const logeedInUser = localStorage.getItem('logeedInUser')

    if (logeedInUser) {
      const userData = JSON.parse(logeedInUser)
      setUser(userData.role)
      setLoginUser(userData.data)
    }

  }, [])
  const handleLogin = (email, password) => {
    if (email === "joniadmin123@gmail.com" && password === "123") {
      setUser({ role: "admin" });
      setLoginUser({ role: "admin" });
      localStorage.setItem("loginUser", JSON.stringify({ role: "admin" }));
      console.log("Admin dashboard");
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser({ role: "employees", employee });
        setLoginUser(employee);
        localStorage.setItem(
          "loginUser",
          JSON.stringify({ role: "employees", data: employee })
        );
        console.log("Employee dashboard");
      } else {
        toast.error("Invalid email or password!");
      }
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <>
      <ToastContainer />
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          {user.role === "admin" && <AdminDas loginUser={loginUser} />}
          {user.role === "employees" && <EmpDas loginUser={loginUser} />}
        </>
      )}
    </>
  );
}

export default App;
