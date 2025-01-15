import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDrawerContext } from "../shared/context/DrawerContext";

export const AppRoutes = () =>{

    const { toggleDrawerOpen } = useDrawerContext()

    return(
        <Routes>
            <Route
                path="/inicio"
                element={<p><Button variant="contained" onClick={ toggleDrawerOpen } color="secondary">Drawer Open</Button></p>}
            />

            <Route
                path="*"
                element={<Navigate to={"/inicio"}/>}
            />
        </Routes>
    );
}