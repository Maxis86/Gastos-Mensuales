import React from "react";

import Drawer from "@mui/material/Drawer";

import { NuevoMes } from "../meses/NuevoMes";
import { ListadoMeses } from "../meses/ListadoMeses";

const drawerWidth = 240;

export const Sidebar = () => {
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <NuevoMes 
         />

        <ListadoMeses />

      </Drawer>
    </div>
  );
};
