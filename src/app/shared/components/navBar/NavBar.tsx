import { Avatar, Divider, Drawer,  useTheme, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material"
import { green, orange } from "@mui/material/colors"
import { Box, display } from '@mui/system'
import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import { useDrawerContext } from "../../context";

export const NavBar: React.FC<{children: React.ReactNode}> = ({children}) =>{
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    
    const  {isDrawerOpen, toggleDrawerOpen} = useDrawerContext()

    return(
        <>
            <Drawer open={isDrawerOpen} variant={smDown? 'temporary':'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} display={"flex"} flexDirection={"column"} height={theme.spacing(20)}>
                    <Box width={"100%"} 
                        height={theme.spacing(30)}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Avatar sx={{ 
                            bgcolor: green[800], 
                            height:theme.spacing(11), 
                            width:theme.spacing(11),
                            fontSize: theme.spacing(5),
                            margin: theme.spacing(4)
                        }}
                            variant="square"
                        >R</Avatar>
                    </Box>
                    
                    <Divider/>
                    <Box flex={1}>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton>
                                <ListItemIcon>
                                <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height={"100vh"} marginLeft={ smDown? 0:theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}