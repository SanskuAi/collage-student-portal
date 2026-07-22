// GLOBAL LOGIN STATE

import {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext()

export default function AuthProvider({children}){
    // state
    const [user,setUser]= useState(null)
    const [token,setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    //  App load hote hi check karo
    useEffect(()=>{
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user') ;
    
        if(storedUser && storedToken){
            setToken(storedToken);
            setUser(JSON.parse(storedUser))
        }
    
        setLoading(false)
    
    },[]) 

    // LOGIN
    const login = (token, user)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setToken(token)
        setUser(user);
    };

    // LOGOUT
    const logout =()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        setToken(null)
        setUser(null)
    };

     // Context value
  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated : !!token}

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
