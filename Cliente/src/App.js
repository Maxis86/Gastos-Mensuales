import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Login} from './Components/auth/Login'
import {NuevaCuenta} from './Components/auth/NuevaCuenta'
import {Meses} from './Components/meses/Meses'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
        <Route exact path="/meses" component={Meses}/>
      </Switch>
    </Router>
    
  );
}

export default App;
