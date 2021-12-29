import React, {useContext, useEffect} from "react";

import mesContext from '../../context/meses/mesContext'
import authContext from "../../context/autentificacion/authContext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;


export default function Barra() {


//Extraer información de autenticación
  const authContexts = useContext(authContext)
  const {usuarioAutenticado, usuario, cerrarSesion} = authContexts;

  const mesesContext = useContext(mesContext);
  const {mes} = mesesContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [])

  return (
    <Box >
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          {usuario ? <Button color="inherit">Hola {usuario.nombre}</Button> : null}
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
            Gastos de {mes[0].nombre}
            </Typography>
          ):   
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
            </Typography>}
          
          <Button color="inherit" onClick= {() => cerrarSesion() } >Cerrar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
