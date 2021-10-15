import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export const NuevaCuenta = () => {
  //Variable Usuario
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //Extraigo las variables de usuario
  const { nombre, email, password, confirmar } = usuario;

  //guardamos los datos ingresados por el usuario
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    //Validar que no haya campos vacios

    //Otras validaciónes del password, que sean iguales

    //Pasarlo al Action

  };

  return (
    <Box
      component="form"
      sx={{
        m: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiTextField-root": { m: 1, width: "30ch" },
        color: "secondary",
        "& fieldset": {
          borderColor: "blue",
        },
        //bgcolor: 'primary.dark',
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Registrarse</h1>

      <form>

        <div style={{ width: "100%" }}>
          <TextField
            name="nombre"
            id="nombre"
            label="Nombre"
            type="text"
            autoComplete="current-password"
            value={nombre}
            onChange={onChange}
            color="secondary"
          />
        </div>

        <div style={{ width: "100%" }}>
          <TextField
            name="email"
            id="email"
            label="Email"
            type="email"
            autoComplete="current-password"
            value={email}
            onChange={onChange}
            color="secondary"
          />
        </div>

        <div>
          <TextField
            name="password"
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={onChange}
            color="secondary"
          />
        </div>

        <div>
          <TextField
            name="confirmar"
            id="confirmar"
            label="Confirmar Password"
            type="password"
            autoComplete="current-password"
            value={confirmar}
            onChange={onChange}
            color="secondary"
          />
        </div>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" value="Iniciar Sesión" variant="contained">
            Iniciar Sesión
          </Button>
        </Box>
      </form>

      <Link to={"/"}>Ir a Logín</Link>
    </Box>
  );
};
