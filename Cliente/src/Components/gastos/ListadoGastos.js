import React from "react";
import gastoContext from "../../context/gastos/gastoContext";
import mesContext from '../../context/meses/mesContext'
import { Gasto } from "./Gasto";
import { useContext } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

export const ListadoGastos = () => {
  const gastosContext = useContext(gastoContext);
  const { gastosMes } = gastosContext;

  const mesesContext = useContext (mesContext);
  const {mes} = mesesContext;

  if( mes === null ) {
    return null
  }else if (gastosMes.length === 0 ) {
    return <p>No hay gastos, comienza creando uno</p>;
  } 

  return (
    <div>
    <Box
          sx={{
            width: '100%',
            height: 75,
            backgroundColor: '#D1E8E4',
            display: "flex",
            flexDirection: "row nowrap",
            p: .5,
            m: .2,
            alignItems:'center'
          }}
        >
          <Box
            sx={{
              
              width: '35%',
              // flexGrow: 1.5,
            }}
          >
            <ListItemButton>
              <Typography
                sx={{
                  
                  fontSize: 30,
                  fontWeight: "medium",
                  mr: 15,
                }}
              >
                Detalle
              </Typography>
            </ListItemButton>
          </Box>
          <Box
            sx={{
              
              width: '20%',
              // flexGrow: 1,
            }}
          >
            <ListItemButton>
              <Typography
                sx={{
                  
                  fontSize: 30,
                  fontWeight: "medium",
                }}
              >
                Precio
              </Typography>
            </ListItemButton>
          </Box>

          <Box
            sx={{
              
              width: '10%',
              // flexGrow: .5,
            }}
          >
            
          </Box>
          <Box
            sx={{
              
              width: '10%',
              // flexGrow: .5,
            }}
          >
          
          </Box>
          <Box
            sx={{
              // flexGrow: .5,
                  fontSize: 30,
                  fontWeight: "medium",
                  mr: 15,
            }}
          >
          Estado
          </Box>
        </Box>
      {gastosMes.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};
