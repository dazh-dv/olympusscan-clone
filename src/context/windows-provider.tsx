'use client';
import { useState, createContext, Dispatch } from 'react'

interface WIndowsContextType {
  loading: boolean;
  setLoading: Dispatch<any>;
  seriesModal: boolean;
  setSeriesModal: Dispatch<any>;
  drawerSeries: boolean,
  setDrawerSeries: Dispatch<any>,
}

const WindowsContext = createContext<WIndowsContextType>({
  loading: true,
  setLoading: () => {},
  seriesModal: false,
  setSeriesModal: () => {},
  drawerSeries: false,
  setDrawerSeries: () => {},
})

export function WinwowsProvider({ children }:{ children: React.ReactNode}){

  const [loading, setLoading] = useState(true)
  const [seriesModal, setSeriesModal] = useState(false)
  const [drawerSeries, setDrawerSeries] = useState(false)

  return(
    <WindowsContext.Provider value={{
      loading,
      setLoading,
      seriesModal,
      setSeriesModal,
      drawerSeries,
      setDrawerSeries,
    }}>
      {children}
    </WindowsContext.Provider>
  )
}

export default WindowsContext