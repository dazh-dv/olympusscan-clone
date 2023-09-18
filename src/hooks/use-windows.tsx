'use client'
import { useContext } from 'react'
import WindowsContext from '@/context/windows-provider'

export default function useWindows() {
    return useContext(WindowsContext)
}