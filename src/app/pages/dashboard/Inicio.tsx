import { useRef } from "react"
import { Link } from "react-router-dom"

export const Inicio = () =>{
    
    const couterRef = useRef({counter : 0 }) 
    return(
        <div>
            <center>
                <button onClick={() => console.log(couterRef.current.counter++)}><b>Toque me</b></button>
                <u><h1>Bem vindo a Radinfo</h1></u>
                <Link to={"/login/"}>Logouf</Link>
                <br/>
                <Link to={"/listarTarefas"}>Listar Tarefas</Link>
            </center>
        </div>
    )
}