import React, {useEffect} from "react";
import gastoContext from "../../context/gastos/gastoContext";
import mesContext from '../../context/meses/mesContext'
import { Gasto } from "./Gasto";
import { useContext } from "react";


import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export const ListadoGastos = () => {
  const gastosContext = useContext(gastoContext);
  const { gastosMes } = gastosContext;

  const mesesContext = useContext (mesContext);
  const {mes, eliminarMes} = mesesContext;

  // useEffect(() => {
    
  // }, [mes])

  const onClieckEliminarProyecto = () => {
 
    eliminarMes(mes[0]._id);
  }

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


      <Button color="inherit" onClick= {() => onClieckEliminarProyecto() }>Eliminar Proyecto</Button>
    </div>
  );
};
