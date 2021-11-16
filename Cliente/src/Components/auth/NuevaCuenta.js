import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertaContext from '../../context/alertas/alertaContext';

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

  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario');
    console.log(usuario);

    
    
    mostrarAlerta('Todos los campostos son obligatorios', 'alerta-error')
    //Validar que no haya campos vacios
    if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
        mostrarAlerta('Todos los campostos son obligatorios', 'alerta-error')
        return
    }

    //Password minimo de 5 caracteres
    if(password.length <6){
      mostrarAlerta('El password debe ser por lo menos de 6 caracteres')
      return
    }

    //Otras validaciónes del password, que sean iguales
    if(password !== confirmar){
      mostrarAlerta('Los passwords no son iguales')
    }

    //Pasarlo al Action
  }

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
      {alerta ? ( <div>{alerta.msg}</div>) : null}

      <AccountCircleIcon color="primary" sx={{ fontSize: 150 }} />

      <Typography variant="h2" color="secundary" aling="center" paragraph>
        Registrarse
      </Typography>

      <form
        //onSubmit={onSubmit}
        >
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
          <Button type="submit" value="Iniciar Sesión" variant="contained" onClick={onSubmit}>
            Iniciar Sesión
          </Button>
        </Box>
      </form>

      <Link to={"/"} className={classes.root}>Ir a Logín</Link>
    </Box>
  );
};
