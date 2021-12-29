import React, { useReducer } from 'react';
import mesContext from './mesContext';
import mesReducer from './mesReducer';

import { FORMULARIO_MES, 
    AGREGAR_MES, 
    MES_ACTUAL,
    OBTENER_MES,
    ELIMINAR_MES,
    MES_ERROR
    } from "../../types";
import clienteAxios from '../../config/axios';



const MesState = props => {
    const initialState = {
        mesesGastos: '',
        mes: null,
        formulario: false,
        mensaje: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(mesReducer, initialState);

    // Crear las funciones

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_MES
        })
    }

    const eliminarMes = async mesid => {
        try {

            await clienteAxios.delete(`api/proyectos/${mesid}`) 
            dispatch({
                 type: ELIMINAR_MES,
                 payload: mesid
            })
           
            
        } catch (error) {

            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }

            dispatch({
                type: MES_ERROR,
                payload: alerta
           })
        }
    }

    const obtenerMeses = async() => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos')

            dispatch({
                type: OBTENER_MES,
                payload: resultado.data.proyectos
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }

            dispatch({
                type: MES_ERROR,
                payload: alerta
           })
        }
    }

    const agregarMes = async proyecto => {

        try {
          
            
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
           
            // Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_MES,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }

            dispatch({
                type: MES_ERROR,
                payload: alerta
           })
        }
    }

    const mesActual = id =>{
        dispatch({
            type:MES_ACTUAL,
            payload: id
        })

    }


    return (
        <mesContext.Provider
            value={{
                mesesGastos : state.mesesGastos,
                formulario: state.formulario,
                mes: state.mes,
                mensaje: state.mensaje,
                mostrarFormulario,
                agregarMes,
                mesActual,
                obtenerMeses,
                eliminarMes
            }}
        >
            {props.children}
        </mesContext.Provider>
    )

}

export default MesState;