import React, { useReducer } from 'react';
import gastoContext from './gastoContext';
import gastoReducer from './gastoReducer';

import { GASTOS_MES, OBTENER_GASTO } from "../../types";

const GastoState = props => {
    const initialState = {
        gastosMeses: [
                        {id: 1, nombre:'Seguro', precio:'$2500', mesid: 1},
                        {id: 2, nombre:'Ingles', precio:'$3400', mesid: 2},
                        {id: 3, nombre:'Patente', precio:'$9300', mesid: 3},
                        {id: 4, nombre:'Expensas', precio:'$5400', mesid: 2},
                        {id: 5, nombre:'Luz', precio:'$1200', mesid: 1},
                        {id: 6, nombre:'Gas', precio:'$385', mesid: 4},
                        ],
        gastosMes: [],
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


    return (
        <gastoContext.Provider
            value={{
                gastosMeses : state.gastosMeses,
                gastosMes: state.gastosMes,
                obtenerGastos,

            }}
        >
            {props.children}
        </gastoContext.Provider>
    )

}

export default GastoState;