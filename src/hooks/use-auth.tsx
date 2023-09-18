'use client'
import { useContext } from 'react'
import AuthContext from '@/context/auth-provider'

export default function useAuth() {
    return useContext(AuthContext)
}