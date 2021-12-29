import React, {useContext, useState} from 'react';
import gastoContex from '../../context/gastos/gastoContext';
import mesContext from '../../context/meses/mesContext'

import { v4 as uuidv4 } from 'uuid';

import { Button, IconButton, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AddCircleIcon from '@mui/icons-material/AddCircle';


export const FormGastos = () => {

    const gastosContext = useContext (gastoContex);
    const { agregarGasto, obtenerGastos} = gastosContext;
    
    const mesesContext = useContext (mesContext);
    const {mes} = mesesContext;

    const [open, setOpen] = React.useState(false);

    // State del formulario
    const [tarea, guardarTarea] = useState({
      nombre: '',
      precio: ''
  })

  
    // extraer el nombre del proyecto
    const { nombre, precio } = tarea;

    // Si no hay proyecto seleccionado
    if(!mes) return null;

    const agregarTarea =() => {
      // mostrarFormGasto();
      handleOpen();
    }

    const onChange =(e) => {
      guardarTarea({
        ...tarea,
        [e.target.name]: e.target.value,
      });

      
    }


    const handleOpen = () => { 
      
      setOpen(true);

      const idMesActual = mes[0]._id;
      
      guardarTarea({
        ...tarea,
        proyecto: idMesActual
      });}

    const handleClose = () => setOpen(false);

    const onSubmitGasto = (e) => {
      e.preventDefault();

      agregarGasto(tarea);  
      obtenerGastos(mes[0].id)

      handleClose();
    };

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    if(!mes) return <p>Elije un mes</p>;

    return (

        <Box sx={{
            //flexGrow: .5,
            fontSize: 25,
            mb:2, 
            justifyContent: 'flex-end'
          }} >
          
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Nuevo Gasto
                </Typography>
               
                <form  onSubmit={onSubmitGasto}>
                  <Box>
                    <TextField
                      name="nombre"
                      label="Nombre"
                      type="text"
                      value={nombre}
                      onChange={onChange}
                      color="secondary"
                      sx={{ m: 1, mb:2 }}
                    />
                  </Box>
                  
                  <Box>
                    <TextField
                      name="precio"
                      label="Precio"
                      type="number"
                      value={precio}
                      onChange={onChange}
                      color="secondary"
                      sx={{ m: 1, mb:2 }}
                    />
                  </Box>

                <Box sx ={{display: 'flex',
                           justifyContent: 'flex-end',
                           fontSize: 100,
                          }}>
                  <Button  type="submit"  sx ={{
                           fontSize: 20,
                           color: 'green'
                          }}>
                    Agregar
                  </Button>

                  <Button sx ={{
                           fontSize: 20,
                           color: 'red'
                          }} onClick={handleClose}>
                    Cerrar
                  </Button>
                </Box>
                
                </form>
                
              </Box>
            </Modal>
         
            <IconButton aria-label="Example" onClick={agregarTarea}>
            <AddCircleIcon color="success" sx={{
                        //flexGrow: .5,
                        fontSize: 80
                      }} >
            </AddCircleIcon>
          </IconButton>
          
        </Box>
    )
}
