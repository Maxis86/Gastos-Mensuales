import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { 
    REGISTRO_EXISTOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    
 } from "../../types";

 const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'), 
        autenticado: null,
        usuario: null,
        mensaje: null,
    }

    const [state, dispatch] = useReducer(authReducer, initialState)


     return (
        <AuthContext.Provider
            value={{
                token:state.token,
                autenticado: state.authautenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >{props.children}

        </AuthContext.Provider>
     )
 }

 export default AuthState;