// index.jsx
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AdminDas from './Componets/Dasboard/AdminDas.jsx'
import EmpDas from './Componets/Dasboard/EmpDas.jsx'
import AuthContext from './Context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(

  <AuthContext>
    <App />
  </AuthContext>




)
