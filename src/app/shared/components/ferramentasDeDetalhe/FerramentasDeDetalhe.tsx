import { Box, Button, Divider, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material"
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

    mostrarBotaoNovoCarregando?: boolean
    mostrarBotaoSalvarCarregando?: boolean
    mostrarBotaoSalvarEVoltarCarregando?: boolean
    mostrarBotaoApagarCarregando?: boolean
    mostrarBotaoVoltarCarregando?: boolean

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
    
    mostrarBotaoNovoCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoVoltarCarregando = false,

    aoClicarEmBotaoNovo,
    aoClicarEmBotaoSalvar,
    aoClicarEmBotaoSalvarVoltar,
    aoClicarEmBotaoApagar,
    aoClicarEmBotaoVoltar
}) =>{

    const theme = useTheme();
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
            {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando &&(
                <Button
                color="primary"
                variant="contained"
                disableElevation
                startIcon={<SaveIcon/>}
                onClick={aoClicarEmBotaoSalvar}
                >
                    <Typography 
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        >
                    {textoBotaoSalvar}
                    </Typography>
                </Button>
            )}
            {mostrarBotaoSalvarCarregando &&(
                <Skeleton width={110} height={60}/>
            )}

            {(mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando && !lgDown) && (
                <Button
                color="primary"
                variant="outlined"
                disableElevation
                startIcon={<SaveIcon/>}
                onClick={aoClicarEmBotaoSalvarVoltar}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        {textoBotaoSalvarEVoltar}
                    </Typography>
                </Button>
            )}
            {(mostrarBotaoSalvarEVoltarCarregando && !mdDown) && (
                <Skeleton width={110} height={60}/>
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) &&(
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<AddIcon/>}
                    onClick={aoClicarEmBotaoNovo}
                >
                    {textoBotaoNovo}
                </Button>
            )}
            
            {(mostrarBotaoNovoCarregando && !smDown) &&(
                <Skeleton width={110} height={60}/>
            )}
            
            {mostrarBotaoApagar && !mostrarBotaoApagarCarregando &&(
                <Button
                color="primary"
                variant="outlined"
                disableElevation
                startIcon={<DeleteIcon/>}
                onClick={aoClicarEmBotaoApagar}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        {textoBotaoApagar}
                    </Typography>
                </Button>

            )}
            {mostrarBotaoApagarCarregando && (
                <Skeleton width={110} height={60}/>
            )}
            
            {mostrarBotaoVoltar && (
                mostrarBotaoApagar ||
                mostrarBotaoNovo ||
                mostrarBotaoSalvarEVoltar ||
                mostrarBotaoSalvar
                )
                &&
                (
                    <Divider
                        variant="middle"
                        orientation="vertical"
                    />
                )
            }

            {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
              <Button
                color="primary"
                variant="outlined"
                disableElevation
                startIcon={<ArrowBackIcon/>}
                onClick={aoClicarEmBotaoVoltar}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        {textoBotaoVoltar}
                    </Typography>
                </Button>
            )}
            {mostrarBotaoVoltarCarregando && (
                <Skeleton width={110} height={60}/>
            )}
        </Box>
    )
}