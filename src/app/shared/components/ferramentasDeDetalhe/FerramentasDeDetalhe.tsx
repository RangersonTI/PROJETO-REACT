import { Box, Button, Divider, Paper, useTheme } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IFerramentasDeDetalheProps{
    textoBotaoNovo?: string
    textoBotaoSalvar?: string
    textoBotaoSalvarEVoltar?: string
    textoBotaoApagar?: string
    textoBotaoVoltar?: string
    
    mostrarBotaoNovo?: boolean
    mostrarBotaoSalvar?: boolean
    mostrarBotaoSalvarEVoltar?: boolean
    mostrarBotaoApagar?: boolean
    mostrarBotaoVoltar?: boolean

    aoClicarEmBotaoNovo?: () => void
    aoClicarEmBotaoSalvar?: () => void
    aoClicarEmBotaoSalvarVoltar?: () => void
    aoClicarEmBotaoApagar?: () => void
    aoClicarEmBotaoVoltar?: () => void
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> =({
    textoBotaoNovo = "Novo",
    textoBotaoSalvar = "Salvar",
    textoBotaoSalvarEVoltar = "Salvar e Voltar",
    textoBotaoApagar = "Apagar",
    textoBotaoVoltar = "Voltar",

    mostrarBotaoNovo = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEVoltar = false,
    mostrarBotaoApagar = true,
    mostrarBotaoVoltar = true,

    aoClicarEmBotaoNovo,
    aoClicarEmBotaoSalvar,
    aoClicarEmBotaoSalvarVoltar,
    aoClicarEmBotaoApagar,
    aoClicarEmBotaoVoltar
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
            {mostrarBotaoNovo &&(
                <Button
                    color="primary"
                    variant="contained"
                    disableElevation
                    startIcon={<AddIcon/>}
                >
                    {textoBotaoNovo}
                </Button>
            )}
            {mostrarBotaoSalvar && (
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<SaveIcon/>}
                >
                    {textoBotaoSalvar}
                </Button>
            )}
            {mostrarBotaoSalvarEVoltar && (
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<SaveIcon/>}
                >
                    {textoBotaoSalvarEVoltar}
                </Button>
            )}
            {mostrarBotaoApagar && (
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<DeleteIcon/>}
                >
                    {textoBotaoApagar}
                </Button>

            )}
            <Divider
                variant="middle"
                orientation="vertical"
            />
            {mostrarBotaoVoltar && (
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<ArrowBackIcon/>}
                >
                    {textoBotaoVoltar}
                </Button>
            )}
        </Box>
    )
}