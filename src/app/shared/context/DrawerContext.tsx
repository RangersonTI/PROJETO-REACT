
import React, { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData{
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () =>{
    return useContext(DrawerContext)
}

export const DrawerOpenProvider: React.FC<IDrawerContextData> = ({ children }) =>{

    const [isDrawerOpen,setIsDrawerOpen] = useState(false)

    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    },[isDrawerOpen])

    return(
        <DrawerContext.Provider value={{children, isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    )
}