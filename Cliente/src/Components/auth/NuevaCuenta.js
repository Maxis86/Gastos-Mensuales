import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    display: 'block',
    opacity: .7,
    color: 'blue',
  },
});

export const NuevaCuenta = () => {

  const classes = useStyles();


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

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   //Validar que no haya campos vacios

  //   //Otras validaciónes del password, que sean iguales

  //   //Pasarlo al Action
  // };

  return (
    <Box
      component="form"
      sx={{
        m: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiTextField-root": { m: 1, width: "40ch" },
        color: "secondary",
        "& fieldset": {
          borderColor: "blue",
        },
        //bgcolor: 'primary.dark',
      }}
      noValidate
      autoComplete="off"
    >
      <AccountCircleIcon color="primary" sx={{ fontSize: 150 }} />

      <Typography variant="h2" color="secundary" aling="center" paragraph>
        Registrarse
      </Typography>

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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" value="Iniciar Sesión" variant="contained">
            Iniciar Sesión
          </Button>
        </Box>
      </form>

      <Link to={"/"} className={classes.root}>Ir a Logín</Link>
    </Box>
  );
};
