// AuthProvider.jsx
import React, { useState, useEffect, createContext } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/localStorge'

// Create the context
export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  // localStorage.clear()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalstorage()
    let { employees } = getLocalstorage()
    if ({ employees }) {
      setUserData( employees)
    }
  }, [])

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}
