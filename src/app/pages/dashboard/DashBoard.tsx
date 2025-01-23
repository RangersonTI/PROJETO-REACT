import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePaginas } from "../../shared/layouts";

export const Dashboard = () =>{
    return(
        <LayoutBaseDePaginas
            titulo="Pagina Inicial"
            barraDeFerramenta={
                <BarraDeFerramentas
                    mostrarInputBusca
                    mostraBotaoNovo
                    textoBotaoNovo={"Nova"}
                />
            }
        >
            Testando
        </LayoutBaseDePaginas>
    );
}