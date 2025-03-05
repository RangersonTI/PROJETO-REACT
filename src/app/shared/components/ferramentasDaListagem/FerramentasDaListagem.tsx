import { Box, Button, Paper, TextField, useTheme } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { Enviroments } from "../../environments";

interface IFerramentasDaListagemProps{
    textoBusca?: string
    mostrarInputBusca?: boolean
    aoMudarTextoBusca?: (novoTexto: string) => void
    textoBotaoNovo?: string
    mostraBotaoNovo?: boolean
    onClick?: () => void
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoBusca='',
    mostrarInputBusca=false,
    aoMudarTextoBusca,
    mostraBotaoNovo=true,
    onClick,
    textoBotaoNovo="Novo"
}) =>{

    const theme = useTheme()
    return(
        <Box
            component={Paper}
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display={"flex"}
            gap={1}
            alignItems={"center"}
        >
            {mostrarInputBusca && (
                <TextField
                    size={"small"}
                    placeholder={Enviroments.INPUT_DE_BUSCA}
                    value={textoBusca}
                    onChange={(e) => aoMudarTextoBusca?.(e.target.value)}
                />
            )}

            <Box
                flex={1}
                display={"flex"}
                justifyContent={"end"}
            >
                {mostraBotaoNovo && (
                    <Button
                        color="primary"
                        variant="contained"
                        disableElevation
                        endIcon={<AddIcon/>}
                        onClick={onClick}
                    >
                        {textoBotaoNovo}
                    </Button>
                )}
            </Box>
        </Box>
    )
}