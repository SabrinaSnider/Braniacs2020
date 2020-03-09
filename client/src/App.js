import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import ParkingDirections from './views/MapView/ParkingDirections'
import HospitalDirections from './views/MapView/HospitalDirections'


const App = () => {
  return (
    <div style={{display: 'flex', 'flexFlow': 'column', 'height': '100vh'}}>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/ParkingDirections" component={ParkingDirections} /> 
        <Route exact path="/HospitalDirections" component={HospitalDirections} /> 
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
