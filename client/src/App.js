import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignIn/SignUp'
import NavigationPage from './views/Navigation/Navigation'
import HospitalDirections from './views/Navigation/HospitalDirections'

const App = () => {
  return (
    <div style={{display: 'flex', 'flexFlow': 'column', 'minHeight': '100vh'}}>
      <Switch>
        <Route exact path="/Home" component={Home}/>
        <Route component={DefaultContainer}/>
      </Switch>
    </div>
  );
}

// TODO: set color of background to the background image; for some reason it isn't working
const DefaultContainer = () => (
  <div style={{display: 'flex', 'flexFlow': 'column', 'minHeight': '100vh', 'backgroundImage': 'url(/background.png)'}}>
    <NavBar />
    <Switch>
      <Route exact path="/Navigation/:option" component={NavigationPage} />
      <Route exact path="/HospitalDirections" component={HospitalDirections} /> 
      <Route exact path="/SignIn" component={SignIn} /> 
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route component={NotFound}/>
    </Switch>
  </div>
)

export default App;
