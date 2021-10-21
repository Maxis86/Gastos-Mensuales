import React, {useContext, useState} from "react";

import mesContext from '../../context/meses/mesContext'

import Button from "@mui/material/Button";

export const NuevoMes = () => {

    const mesesContext = useContext(mesContext);
    const {mostrarFormulario, formulario} = mesesContext;

// State para Proyecto
const [mes, guardarMes] = useState({
    nombreMes: ''
});

// Extraer nombre de proyecto
const {nombreMes} = mes;

// Lee los contenidos del input
const onChangeMes = e => {
    guardarMes({
        ...mes,
        [e.target.name] : e.target.value
    })
}

// Cuando el usuario envia un proyecto
const onSubmitMes = e => {
    e.preventDefault();

    // // Validar el proyecto
    // if(nombre === '') {
    //     mostrarError();
    //     return;
    // }

    // // agregar al state
    // agregarProyecto(proyecto)

    // // Reiniciar el form
    // guardarProyecto({
    //     nombre: ''
    // })
}

  // Mostrar el formulario
  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <div>
      <Button onClick={onClickFormulario}>Nuevo Mes</Button>
      
      { formulario ? 
                    (
                        <form

                            onSubmit={onSubmitMes}
                        >
                            <input 
                                type="text"
                                placeholder="Nombre del Mes"
                                name="nombreMes"
                                value={nombreMes}
                                onChange={onChangeMes}
                            />

                            <input 
                                type="submit"
                                value="Agregar Mes"
                            />

                        </form>
                ) : null }


    </div>
  );
};
