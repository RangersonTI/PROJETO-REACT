import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAppThemeContext } from "../shared/context/ThemeContext";

export const AppRoutes = () =>{

    const {toggleTheme} = useAppThemeContext()

    return(
        <Routes>
            <Route
                path="/inicio"
                element={<p><Button variant="contained" onClick={ toggleTheme } color="secondary">Teste</Button></p>}
            />

            <Route
                path="*"
                element={<Navigate to={"/inicio"}/>}
            />
        </Routes>
    );
}