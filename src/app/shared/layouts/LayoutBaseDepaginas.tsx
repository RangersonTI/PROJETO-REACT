import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { useDrawerContext } from "../context";

interface ILayoutBaseDePaginasProps{
    children: React.ReactNode
    titulo: string
    barraDeFerramenta?: React.ReactNode
}

export const LayoutBaseDePaginas: React.FC<ILayoutBaseDePaginasProps> = ({titulo, children, barraDeFerramenta}) =>{

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    const { toggleDrawerOpen } = useDrawerContext();

    return(
        <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={"1px"}>
            Teste

            <Box padding={1} 
                display={"center"}  
                alignItems={"center"} 
                height={
                    theme.spacing(
                    smDown? 6: mdDown? 8:12
                    )}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <MenuIcon/>
                    </IconButton>
                )
                }
                <Typography 
                    variant={smDown? 'h5': mdDown? 'h4':'h3'}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    >
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramenta &&(
                <Box>
                    {barraDeFerramenta}   
                </Box>
            )
            }

            <Box flex={1} overflow={"auto"}>
                {children}
            </Box>
        </Box>
    );
}