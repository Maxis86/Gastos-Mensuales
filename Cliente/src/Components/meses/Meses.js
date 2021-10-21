import React from "react";

import { Sidebar } from "../layout/Sidebar";
import Barra from "../layout/Barra";
import { FormGastos } from "../gastos/FormGastos";
import { ListadoGastos } from "../gastos/ListadoGastos";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

export const Meses = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Barra />

      <Sidebar />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <FormGastos/>
        <ListadoGastos/>        
      </Box>
    </Box>
  );
};
