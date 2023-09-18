'use client';
import { getSession, typelogout } from '@/constants/auth';
import { UserType } from '@/types/auth';
import { useState, useEffect, createContext, Dispatch } from 'react'

interface AuthContextType {
  auth: any;
  setAuth: Dispatch<any>;
  loading: boolean;
  setLoading: Dispatch<any>;
  showModal: boolean;
  setShowModal: Dispatch<any>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  auth: {},
  setAuth: () => {},
  loading: true,
  setLoading: () => {},
  showModal: false,
  setShowModal: () => {},
  logout: () => {},
})

export function AuthProvider({ session, children }:{ session: UserType | undefined, children: React.ReactNode}){

  const [auth, setAuth] = useState({})
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    setAuth({})
    setLoading(false)
    // fetch(`/api/auth?type=${getSession}`, {
    //   method: 'POST',
    // }).then(res => res.json()).then(res => {
    //   setLoading(false)
    //   if(res.data.user){
    //     setAuth(res.data.user)
    //   }
    //   return
    // })
  }, [])

  const logout = () => {
    fetch(`/api/auth?type=${typelogout}`, {
      method: 'POST'
    }).then(res => res.json()).then(res => {
      if(res.succes){
        setAuth({})
      }
      return
    })
  }

  return(
    <AuthContext.Provider value={{
      auth,
      setAuth,
      loading,
      setLoading,
      showModal,
      setShowModal,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext