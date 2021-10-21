import React from 'react'
import gastoContext from '../../context/gastos/gastoContext'
import { useContext } from 'react';

export const ListadoGastos = () => {

    const gastosContext = useContext(gastoContext);
    const { gastosProyecto } = gastosContext;

    return (
        <div>
            <h1>Listado de Gastos</h1>
        </div>
    )
}
