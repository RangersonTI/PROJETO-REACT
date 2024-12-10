import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio, Login, ListarTarefas } from "../pages"

export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/login/" element={<Login/>}/>
                <Route path="/listarTarefas/" element={<ListarTarefas/>}/>
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </BrowserRouter>
    )
} 