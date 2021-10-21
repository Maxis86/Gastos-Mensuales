import React, { useReducer } from 'react';
import mesContext from './mesContext';
import mesReducer from './mesReducer';

import { FORMULARIO_MES } from "../../types";

const MesState = props => {
    const initialState = {
        mesesGastos: [
                        {id: 1, nombreMes:'Enero'},
                        {id: 2, nombreMes:'Febrero'},
                        {id: 3, nombreMes:'Marzo'},
                        {id: 4, nombreMes:'Abril'},
                        ],
        formulario:false,
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(mesReducer, initialState);

    // Crear las funciones

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_MES
        })
    }

    return (
        <mesContext.Provider
            value={{
                mesesGastos : state.mesesGastos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </mesContext.Provider>
    )

}

export default MesState;