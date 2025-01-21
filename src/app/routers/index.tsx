import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/DashBoard";

export const AppRoutes = () =>{

    return(
        <Routes>
            <Route
                path="/inicio"
                element={<Dashboard/>}
            />

            <Route
                path="*"
                element={<Navigate to={"/inicio"}/>}
            />
        </Routes>
    );
}