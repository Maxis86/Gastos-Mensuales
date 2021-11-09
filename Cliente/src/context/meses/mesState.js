import React, { useReducer } from 'react';
import mesContext from './mesContext';
import mesReducer from './mesReducer';

import { FORMULARIO_MES, 
    AGREGAR_MES, 
    MES_ACTUAL
    } from "../../types";

const MesState = props => {
    const initialState = {
        mesesGastos: [
                        {id: 1, nombreMes:'Enero'},
                        {id: 2, nombreMes:'Febrero'},
                        {id: 3, nombreMes:'Marzo'},
                        {id: 4, nombreMes:'Abril'},
                        ],
        mes: null,
        formulario: false,
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(mesReducer, initialState);

    // Crear las funciones

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_MES
        })
    }

    const agregarMes = mes => {
      
        dispatch({
            type: AGREGAR_MES,
            payload: mes
        })
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
                mostrarFormulario,
                agregarMes,
                mesActual
            }}
        >
            {props.children}
        </mesContext.Provider>
    )

}

export default MesState;