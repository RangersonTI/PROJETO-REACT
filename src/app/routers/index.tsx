import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/DashBoard";
import { ListagemDeCidade } from "../pages";
import { useEffect } from "react";

export const AppRoutes = () =>{

    useEffect(() =>{
        
    },[])

    return(
        <Routes>
            <Route
                path="/inicio"
                element={<Dashboard/>}
            />

            <Route
                path="/cidades"
                element={<ListagemDeCidade/>}    
            />

            <Route
                path="*"
                element={<Navigate to={"/inicio"}/>}
            />

        </Routes>
    );
}