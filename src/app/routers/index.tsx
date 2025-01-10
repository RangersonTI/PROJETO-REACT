import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route
                path="/inicio"
                element={<p><Button variant="contained" color="secondary">Teste</Button></p>}
            />

            <Route
                path="*"
                element={<Navigate to={"/inicio"}/>}
            />
        </Routes>
    );
}