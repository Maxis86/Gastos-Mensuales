import React, {useContext} from "react";

import mesContext from '../../context/meses/mesContext'
import gastoContext from "../../context/gastos/gastoContext";


import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const Mes = ({ mes }) => {

  const mesesContext = useContext (mesContext);
  const {mesActual} = mesesContext;

  const gastosContext = useContext (gastoContext);
  const {obtenerGastos} = gastosContext;

  const selecionarMes = id => {
    mesActual(id); // Fijar un mes actual
    
    obtenerGastos(id); // Filtrar los gastos cuando se de click
}

  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>selecionarMes(mes._id)}>
            <ListItemText primary={mes.nombre} />
          </ListItemButton>
        </ListItem>
        
      </List>
    </div>
  );
};
