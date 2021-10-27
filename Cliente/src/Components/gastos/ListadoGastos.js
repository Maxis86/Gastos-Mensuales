import React from 'react'
import gastoContext from "../../context/gastos/gastoContext";
import {Gasto} from "./Gasto"
import { useContext } from 'react';

export const ListadoGastos = () => {

    const gastosContext = useContext (gastoContext);
    const {gastosMes} = gastosContext;


    return (
        <div>
            <h1>Listado de Gastos</h1>
            {gastosMes.map(gasto =>(
                <Gasto key={gasto.id} gasto={gasto}/>
                ))}   
        </div>
    )
}
