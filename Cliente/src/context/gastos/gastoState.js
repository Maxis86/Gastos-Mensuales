import React, { useReducer } from 'react';
import gastoContext from './gastoContext';
import gastoReducer from './gastoReducer';
import clienteAxios from '../../config/axios'

import {  
    GASTOS_MES, 
    MOSTRAR_FORM_GASTO, 
    AGREGAR_GASTO, 
    ELIMINAR_GASTO, 
    EDITAR_GASTO,
    CAMBIAR_ESTADO_GASTO
} from "../../types";

const GastoState = props => {
    const initialState = {
        gastosMeses: [],
        gastosMes: [],
        mostrarForm: false,
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(gastoReducer, initialState);

    // Crear las funciones
    const obtenerGastos = async (proyecto) => {
        console.log(proyecto)
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params: {proyecto}})
            
            dispatch({
                type: GASTOS_MES,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error)
        }
    }

    const mostrarFormGasto =() => {
        dispatch ({
            type: MOSTRAR_FORM_GASTO
        })
    }

    const agregarGasto = async(gasto) => {
        try {
            
            const resultado = await clienteAxios.post('/api/tareas', gasto);
            
            dispatch ({
                type: AGREGAR_GASTO,
                payload: gasto
            })
        } catch (error) {
            console.log(error)
        }
    }
    // Eliminar tarea por id
    const eliminarGasto = async (id, proyecto) => {
        try {

            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto }});
            dispatch({
                type: ELIMINAR_GASTO,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const editarGasto = async (gasto) => {
 
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${gasto.id}`, gasto);

            dispatch({
                type: CAMBIAR_ESTADO_GASTO,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
    }

    const cambiarEstado = async (gasto) => {

        try {
            const resultado = await clienteAxios.put(`/api/tareas/${gasto._id}`, gasto);
            
            dispatch({
                type: CAMBIAR_ESTADO_GASTO,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
       
    }


    return (
        <gastoContext.Provider
            value={{
                //gastosMeses : state.gastosMeses,
                gastosMes: state.gastosMes,
                mostrarForm: state.mostrarForm,
                obtenerGastos,
                mostrarFormGasto,
                agregarGasto,
                eliminarGasto,
                editarGasto,
                cambiarEstado
            }}
        >
            {props.children}
        </gastoContext.Provider>
    )

}

export default GastoState;