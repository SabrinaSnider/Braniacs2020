import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar/NavBar";
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignUp/SignUp'
import NavigationPage from './views/Navigation/Navigation'
import Appointment from "./components/Appointment/src/Appointment";


/*
  Checks for the homepage route first. If not routing to home, sends to DefaultContainer.
  This is done so the default navbar isn't loaded in the homepage; instead, the navbar is
  called from the home component with a home prop passed in.
*/
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


/*
  Checks all other routes besides home. Displays the default navbar for these routes.
*/
const DefaultContainer = () => (
  <div style={{display: 'flex', 'flexFlow': 'column', 'minHeight': '100vh', 'backgroundImage': 'url(/background.png)'}}>
    <NavBar />
    <Switch>
      <Route exact path="/Navigation/:option" component={NavigationPage} />
      <Route exact path="/SignIn" component={SignIn} /> 
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Appointment" component={Appointment} />
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route component={NotFound}/>
    </Switch>
  </div>
)

export default App;
