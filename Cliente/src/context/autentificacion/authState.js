import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import tokenAuth from "../../config/token";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  CERRAR_SESION
} from "../../types";
import clienteAxios from "../../config/axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);


      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });

      //Obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      

      dispatch({
        type: REGISTRO_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // Retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");
      //console.log(respuesta.data.usuario);
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // Cuando el usuario inicia sesión
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      //Obtener el usuario
      usuarioAutenticado();
      
    } catch (error) {
      
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  //Cierra la Sesion
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
