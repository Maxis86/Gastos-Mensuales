import React, { useReducer } from 'react';
import gastoContext from './gastoContext';
import gastoReducer from './gastoReducer';

import { GASTOS_MES, 
    OBTENER_GASTO, 
    MOSTRAR_FORM_GASTO, 
    AGREGAR_GASTO, 
    ELIMINAR_GASTO, 
    EDITAR_GASTO,
    CAMBIAR_ESTADO_GASTO
} from "../../types";

const GastoState = props => {
    const initialState = {
        gastosMeses: [
                        {id: 1, nombre:'Seguro', precio:'$2500', estado:'Adeuda', mesid: 1},
                        {id: 2, nombre:'Ingles', precio:'$3400', estado:'Adeuda', mesid: 2},
                        {id: 3, nombre:'Patente', precio:'$9300', estado:'Adeuda',  mesid: 3},
                        {id: 4, nombre:'Expensas', precio:'$5400', estado:'Adeuda',  mesid: 2},
                        {id: 5, nombre:'Luz', precio:'$1200', estado:'Adeuda',  mesid: 1},
                        {id: 6, nombre:'Gas', precio:'$385', estado:'Adeuda',  mesid: 4},
                        ],
        gastosMes: [],
        mostrarForm: false,
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(gastoReducer, initialState);

    // Crear las funciones
    const obtenerGastos = (id) => {
        dispatch({
            type: OBTENER_GASTO,
            payload: id
        })
    }

    const mostrarFormGasto =() => {
        dispatch ({
            type: MOSTRAR_FORM_GASTO
        })
    }

    const agregarGasto = (gasto) => {
        dispatch ({
            type: AGREGAR_GASTO,
            payload: gasto
        })
    }

    const eliminarGasto = (id) => {
        dispatch({
            type: ELIMINAR_GASTO,
            payload: id
        })
    }

    const editarGasto = (gasto) => {
        dispatch({
            type: EDITAR_GASTO,
            payload: gasto
        })
    }

    const cambiarEstado = (gasto) => {
        dispatch({
            type: CAMBIAR_ESTADO_GASTO,
            payload: gasto
        })
    }


    return (
        <gastoContext.Provider
            value={{
                gastosMeses : state.gastosMeses,
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