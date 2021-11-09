import React, {useContext} from "react";

import mesContext from '../../context/meses/mesContext'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;


export default function Barra() {

  const mesesContext = useContext(mesContext);
  const {mes} = mesesContext;

  return (
    <Box >
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          {mes
          ?(
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gastos de {mes[0].nombreMes}
            </Typography>
          ):   
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
            </Typography>}
          
          <Button color="inherit">Cerrar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
