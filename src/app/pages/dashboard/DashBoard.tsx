import { LayoutBaseDePaginas } from "../../shared/layouts";

export const Dashboard = () =>{
    return(
        <LayoutBaseDePaginas
            titulo="Pagina Inicial"
            barraDeFerramenta={
                <>
                    Barra de Ferramenta
                </>
            }
        >
            Testando
        </LayoutBaseDePaginas>
    );
}