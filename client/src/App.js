import React, {useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar/NavBar";
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignUp/SignUp'
import LogOut from './views/LogOut/LogOut'
import NavigationPage from './views/Navigation/Navigation'
import httpUser from './httpUser'

/*
  Checks for the homepage route first. If not routing to home, sends to DefaultContainer.
  This is done so the default navbar isn't loaded in the homepage; instead, the navbar is
  called from the home component with a home prop passed in.
*/
const App = (props) => {
  const [currentUser, setCurrentUser] = useState(httpUser.getCurrentUser());

  const onLoginSuccess = () => {
      setCurrentUser(httpUser.getCurrentUser());
      console.log(currentUser);
  };

  const logOut = () => {
      httpUser.logOut();
      setCurrentUser(null);
  };

  return (
    <div style={{display: 'flex', 'flexFlow': 'column', 'minHeight': '100vh'}}>
      <Switch>
        <Route exact path="/Home" component={Home}/>
        <Route render={() => <DefaultContainer onLoginSuccess={onLoginSuccess} logOut={logOut}/>} />  {/*currentUser={currentUser}* setCurrentUser={setCurrentUser()}*/}
      </Switch>
    </div>
  );
}


/*
  Checks all other routes besides home. Displays the default navbar for these routes.
*/

const DefaultContainer = (props) => {
  const onLoginSuccess = () => {
    props.onLoginSuccess();
}
  return(
  <div style={{display: 'flex', 'flexFlow': 'column', 'minHeight': '100vh', 'backgroundImage': 'url(/background.png)'}}>
    <NavBar currentUser={props.currentUser} />
    <Switch>
      <Route exact path="/Navigation/:option" component={NavigationPage} />
      <Route path="/SignIn" render={(props) => <SignIn {...props} onLoginSuccess={onLoginSuccess} />}  /> {/*currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}*/}
      <Route path="/SignUp" render={(props) => <SignUp {...props} onLoginSuccess={onLoginSuccess} />}  /> {/* onLoginSuccess={props.onLoginSuccess()} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}*/}
      <Route path="/logout" component={LogOut} logOut={props.logOut} /> {/*currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}*/}
      {console.log(props)}
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route component={NotFound}/>
    </Switch>
  </div>
  );
}

export default App;
