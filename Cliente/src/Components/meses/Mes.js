import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const Mes = ({ mes }) => {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={mes.nombreMes} />
          </ListItemButton>
        </ListItem>
        
      </List>
    </div>
  );
};
