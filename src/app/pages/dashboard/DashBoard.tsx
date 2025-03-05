import { FerramentasDaListagem, FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePaginas } from "../../shared/layouts";

export const Dashboard = () =>{
    return(
        <LayoutBaseDePaginas
            titulo="Pagina Inicial"
            barraDeFerramenta={
                <FerramentasDeDetalhe mostrarBotaoSalvarEVoltar
                />
            }
        >
            Testando
        </LayoutBaseDePaginas>
    );
}