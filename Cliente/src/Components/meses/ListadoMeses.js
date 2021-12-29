import React, {useContext, useEffect} from 'react'

import mesContext from '../../context/meses/mesContext'
import AlertaContext from "../../context/alertas/alertaContext";
import { Mes } from './Mes';

export const ListadoMeses = () => {

    const mesesContext = useContext(mesContext);
    const {mensaje, mesesGastos, obtenerMeses} = mesesContext;
    
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    useEffect(() => {
       if(mensaje) {
           mostrarAlerta(mensaje.msg, mensaje.categoria)
       }
        obtenerMeses();
        
    }, [mensaje]);

    if(mesesGastos.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;


    return (
        <div>
                 {alerta ? <div>{alerta.msg}</div> : null}
                {mesesGastos.map(mes =>(
                <Mes key={mes._id} mes={mes}/>
                ))} 
        </div>
    )
}
