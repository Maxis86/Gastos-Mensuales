import React, { useContext, useState } from "react";
import gastoContext from "../../context/gastos/gastoContext";
import mesContext from '../../context/meses/mesContext'

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Modal, TextField} from '@mui/material'

export const Gasto = ({ gasto }) => {

  const gastosContext = useContext(gastoContext);
  const { eliminarGasto, obtenerGastos, editarGasto, cambiarEstado } = gastosContext;

  const mesesContext = useContext (mesContext);
  const {mes} = mesesContext;


  const [open, setOpen] = React.useState(false);

  const [gastoEdit, nuevoGasto] = useState({
    id: '', 
    nombre:'', 
    precio:'', 
    estado:'Adeuda',
    mesid: ''
  });

  const {nombre, precio} = gastoEdit;

  const onChange =(e) => {
    
    nuevoGasto({
      ...gastoEdit,
      [e.target.name]: e.target.value,
    });

    
  }

  const deleteGasto = () => {

    eliminarGasto(gasto._id, mes[0]._id);

    obtenerGastos(gasto.mesid);
  };

  const editGasto = () => {
    setOpen(true);
    nuevoGasto({
      ...gastoEdit,
      'id': gasto.id,
      estado: gasto.estado,
      'mesid': gasto.mesid
    });
  };

  const handleClose = () => setOpen(false);

  const onSubmitGasto = (e) => {

    e.preventDefault();
    
    editarGasto(gastoEdit);  
    
    nuevoGasto({
      id: '', 
      nombre:'', 
      precio:'', 
      estado:'Adeuda',
      mesid: '',
      
    });
    obtenerGastos(gasto.mesid)
    handleClose();

  };

  const onClickEstado = () => {

    if (gasto.estado === 'Adeuda') {
      gasto.estado = 'Pagado';
    } else {
      gasto.estado = 'Adeuda';
    }
    cambiarEstado(gasto);
   
    obtenerGastos(gasto.mesid)
  }

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

  return (
    <>
      <List>
        <ListItem disablePadding>
          <Box
            sx={{
              width: "100%",
              height: 75,
              //backgroundColor: "primary.dark",
              display: "flex",
              flexDirection: "row nowrap",
              p: 0.5,
              m: 0.2,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                //flexGrow: 4,
              }}
            >
              <ListItemButton>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: 25,
                    fontWeight: "medium",
                    mr: 15,
                  }}
                >
                  {gasto.nombre}
                </Typography>
              </ListItemButton>
            </Box>
            <Box
              sx={{
                //flexGrow: 2,
                width: "20%",
              }}
            >
              <ListItemButton>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: 25,
                    fontWeight: "medium",
                  }}
                >
                  {gasto.precio}
                </Typography>
              </ListItemButton>
            </Box>

            <Box
              sx={{
                //flexGrow: .5,
                width: "10%",
              }}
            >
              <Fab color="green" aria-label="add">
                <DeleteIcon onClick={deleteGasto} />
              </Fab>
            </Box>
            <Box
              sx={{
                //flexGrow: .5,
                width: "10%",
              }}
            >
              <Fab color="primary" aria-label="edit">
                <EditIcon onClick={editGasto} />
              </Fab>
            </Box>
            <Box
              sx={{
                //flexGrow: .5,
                width: "10%",
              }}
            >
              {gasto.estado === 'Pagado'
              ? (
                <Button
                  sx={{
                    //flexGrow: .5,
                    fontSize: 25,
                  }}
                  variant="contained"
                  color="success"
                  //size="large"
                  onClick={onClickEstado}
                >
                  {gasto.estado}
                </Button>
              )
              :(
                <Button
                  sx={{
                    //flexGrow: .5,
                    fontSize: 25,
                  }}
                  variant="contained"
                  color="error"
                  //size="large"
                  onClick={onClickEstado}
                >
                  {gasto.estado}
                </Button>
              )
              }
              
            </Box>
          </Box>
        </ListItem>
      </List>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Gasto
          </Typography>

          <form onSubmit={onSubmitGasto}>
            <Box>
              <TextField
                name="nombre"
                label={gasto.nombre}
                type="text"
                value={nombre}
                onChange={onChange}
                color="secondary"
                sx={{ m: 1, mb: 2 }}
              />
            </Box>

            <Box>
              <TextField
                name="precio"
                label={gasto.precio}
                type="number"
                value={precio}
                onChange={onChange}
                color="secondary"
                sx={{ m: 1, mb: 2 }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                fontSize: 100,
              }}
            >
              <Button
                type="submit"
                sx={{
                  fontSize: 20,
                  color: "green",
                }}
              >
                Editar
              </Button>

              <Button
                sx={{
                  fontSize: 20,
                  color: "red",
                }}
                onClick={handleClose}
              >
                Cerrar
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

// <div>

// </div>
