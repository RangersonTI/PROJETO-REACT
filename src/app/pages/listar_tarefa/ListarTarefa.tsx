import {Link} from "react-router-dom"

export const ListarTarefas = () =>{
    return(
        <div>
            <ul>
                <li>
                    Tarefa 1
                </li>
                <li>
                    Tarefa 2
                </li>
                <li>
                    Tarefa 3
                </li>
                <li>
                    Tarefa 4
                </li>
                <li>
                    Tarefa 5
                </li>
            </ul>
            <Link to={"/"}>Pagina de Início</Link>
        </div>
    )
}