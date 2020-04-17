import React, {useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar/NavBar";
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignUp/SignUp'
import LogOut from './views/LogOut/LogOut'
import NavigationPage from './views/Navigation/Navigation'
import AccountManagement from './views/AccountManagement/AccountManagement'
import Appointment from "./components/Appointment/Appointment";
import AppointmentPage from './views/AppointmentPage/AppointmentPage'
import httpUser from './httpUser'
import ForgotPass from './views/ForgotPassword/ForgotPass';
import ResetPass from './views/ResetPassword/ResetPass';

/*
  Checks for the homepage route first. If not routing to home, sends to DefaultContainer.
  This is done so the default navbar isn't loaded in the homepage; instead, the navbar is
  called from the home component with a home prop passed in.
*/
const App = (props) => {
  const [currentUser, setCurrentUser] = useState(httpUser.getCurrentUser());
  const [currentId, setCurrentId] = useState(httpUser.getCurrentId());
  const[isAdmin, setIsAdmin] = useState(httpUser.getCurrentAdmin());

  const onLoginSuccess = async function() {
      await setCurrentUser(httpUser.getCurrentUser());
      await setCurrentId(httpUser.getCurrentId());
      await setIsAdmin(httpUser.getCurrentAdmin());

  };

  const logOut = async function() {
      httpUser.logOut();
      await setCurrentUser(null);
      await setCurrentId(null);
      await setIsAdmin(false);
  };

  return (
    <div style={{display: 'flex', 'flexFlow': 'column', 'minHeight': '100vh'}}>
      <Switch>
        <Route exact path="/Home" render={() => <Home currentUser={currentUser} isAdmin={isAdmin}/>}/>
        <Route render={() => <DefaultContainer onLoginSuccess={onLoginSuccess} logOut={logOut} currentUser={currentUser} currentId={currentId} isAdmin={isAdmin}/>} />  {/*currentUser={currentUser}* setCurrentUser={setCurrentUser()}*/}
      </Switch>
    </div>
  );
}


/*
  Checks all other routes besides home. Displays the default navbar for these routes.
*/

const DefaultContainer = (props) => {
  const onLoginSuccess = async function() {
    props.onLoginSuccess();
  }

  const logOut = async function(){
    props.logOut();
  }

  const currentUser = props.currentUser;
  const currentId = props.currentId;
  console.log(currentId);
  const isAdmin = props.isAdmin;
  console.log(isAdmin);
  return(
  <div style={{display: 'flex', 'flexFlow': 'column', 'minHeight': '100vh', 'backgroundImage': 'url(/background.png)'}}>
    <NavBar currentUser={currentUser} isAdmin={isAdmin} />
    <Switch>
      <Route exact path="/Navigation/:option" component={NavigationPage} />
      {currentUser && <Route exact path="/Account" render={(props) => <AccountManagement {...props} currentUser={currentUser} />} />}
      {isAdmin && <Route exact path="/Appointment" render={(props) => <Appointment {...props} currentUser={currentUser} currentId={currentId}/>} />}
      <Route exact path="/MyAppointments" render={(props) => <AppointmentPage {...props} currentUser={currentUser} currentId={currentId}/>} />
      <Route path="/forgot" render={(props) => <ForgotPass {...props} />} />
      <Route path="/reset/:token" render={(props) => <ResetPass {...props} />} />
      <Route path="/SignIn" render={(props) => <SignIn {...props} onLoginSuccess={onLoginSuccess} />}  /> {/*currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}*/}
      <Route path="/SignUp" render={(props) => <SignUp {...props} onLoginSuccess={onLoginSuccess} />}  /> {/* onLoginSuccess={props.onLoginSuccess()} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}*/}
      <Route path="/LogOut" render={(props) => <LogOut {...props} logOut={logOut} />} /> {/*currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}*/}
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route component={NotFound}/>
    </Switch>
  </div>
  );
}

export default App;
