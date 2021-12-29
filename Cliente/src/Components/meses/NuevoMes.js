import React, { useContext, useState } from "react";

import mesContext from "../../context/meses/mesContext";

import Avatar from "@mui/material/Avatar";
import logo from "../../logo.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

export const NuevoMes = () => {
  const mesesContext = useContext(mesContext);
  const { mostrarFormulario, formulario, agregarMes } = mesesContext;

  // State para Proyecto
  const [mes, guardarMes] = useState({
    nombre: ''
  });

  // Extraer nombre de proyecto
  const { nombre } = mes;

  // Lee los contenidos del input
  const onChangeMes = (e) => {
    guardarMes({
      ...mes,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario envia un proyecto
  const onSubmitMes = (e) => {
    e.preventDefault();

    
    // // Validar el proyecto
    // if(nombre === '') {
    //     mostrarError();
    //     return;
    // }

    // guardarMes({
    //     ...mes,
    //     "id": 5,
    //   });

    
     // agregar al state
     agregarMes(mes)

    // // Reiniciar el form
    // guardarProyecto({
    //     nombre: ''
    // })
  };

  // Mostrar el formulario
  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <Box
      sx={{ display: "column", justifyContent: "center", alignItems: "center" }}
    >
      <Avatar
        alt="LogoMac"
        src={logo}
        sx={{
          m: 4,
          width: 140,
          height: 180,
        }}
        variant="rounded"
      />

      <Divider />
      <Button onClick={onClickFormulario}>Nuevo Mes</Button>

      {formulario ? (
        <form onSubmit={onSubmitMes}>
          <Box>
            <TextField
              name="nombre"
              label="Mes"
              type="text"
              value={nombre}
              onChange={onChangeMes}
              color="secondary"
              sx={{ m: 1 }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb:3 }}>
            <Button type="submit" value="Agregar Mes" variant="contained">
              Agregar Mes
            </Button>
          </Box>

          
        </form>
      ) : null}
    </Box>
  );
};
