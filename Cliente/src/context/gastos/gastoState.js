import React, { useReducer } from 'react';
import gastoContext from './gastoContext';
import gastoReducer from './gastoReducer';

import { GASTOS_MES } from "../../types";

const GastoState = props => {
    const initialState = {
        gastosProyecto: [
                        {nombre:'Seguro', precio:'$2500'},
                        {nombre:'Ingles', precio:'$3400'},
                        ],
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(gastoReducer, initialState);

    // Crear las funciones

    return (
        <gastoContext.Provider
            value={{
                gastosProyecto : state.gastosProyecto,

            }}
        >
            {props.children}
        </gastoContext.Provider>
    )

}

export default GastoState;