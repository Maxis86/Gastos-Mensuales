import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const Gasto = ({ gasto }) => {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={gasto.nombre} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};
