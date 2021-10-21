import React, {useContext} from 'react'

import mesContext from '../../context/meses/mesContext'
import { Mes } from './Mes';

export const ListadoMeses = () => {

    const mesesContext = useContext(mesContext);
    const {mesesGastos} = mesesContext;

    return (
        <div>

            {mesesGastos.map(mes =>(
                <Mes key={mes.id} mes={mes}/>
                ))}            

        </div>
    )
}
