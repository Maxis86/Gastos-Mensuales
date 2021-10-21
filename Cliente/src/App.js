import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Components/auth/Login";
import { NuevaCuenta } from "./Components/auth/NuevaCuenta";
import { Meses } from "./Components/meses/Meses";
import theme from "./temaconfig";
import GastoState from "./context/gastos/gastoState";
import MesState from "./context/meses/mesState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MesState>
        <GastoState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/meses" component={Meses} />
            </Switch>
          </Router>
        </GastoState>
      </MesState>
    </ThemeProvider>
  );
}

export default App;
