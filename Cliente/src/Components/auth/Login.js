import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autentificacion/authContext";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    display: "block",
    opacity: 0.7,
    color: "blue",
  },
});

export const Login = (props) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // En caso de que el password o usuario no exista
  useEffect(() => {
    if (autenticado) {
      props.history.push("/meses");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  const classes = useStyles();

  //Variable Usuario
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  //Extraigo las variables de usuario
  const { email, password } = usuario;

  //guardamos los datos ingresados por el usuario
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    // Pasarlo al action
    iniciarSesion({ email, password });
  };

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
        Logín
      </Typography>

      {alerta ? <div>{alerta.msg}</div> : null}

      <div>
        <Box>
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
        </Box>

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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            value="Iniciar Sesión"
            variant="contained"
            onClick={onSubmit}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </div>

      <Link to={"/nueva-cuenta"} className={classes.root}>
        Registrarse
      </Link>
    </Box>
  );
};
