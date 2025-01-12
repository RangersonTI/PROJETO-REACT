
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../themes";
import { dark } from "@mui/material/styles/createPalette";

interface IThemeContextData{
    themeName: 'light' | 'dark'
    toggleTheme: () => void
    children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () =>{
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<IThemeContextData> = ({ children }) =>{

    const [themeName,setThemeName] = useState<'light' | 'dark'>('light')

    const toggleTheme = useCallback(()=>{
        setThemeName(themeName === 'light'? 'dark':'light')
    },[themeName])

    const theme = useMemo(()=>{
        if(themeName === 'light') return LightTheme

        return DarkTheme
    },[themeName])

    return(
        <ThemeContext.Provider value={{children, themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width={"100vw"} height={"100vh"} bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}