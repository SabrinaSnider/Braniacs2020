import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LogOutBox from '../../components/LogOut/LogOutBox'

/*
    Sign in page. Displays the sign in box component.
*/
function LogOut(props) {
    const logOut = async function(){
        props.logOut();
      }

    return (
        <div style={{height: '100%', width: '100%', 'flexGrow' : '1'}}>
            <LogOutBox  logOut={logOut}/>
        </div>
    );
}

export default LogOut;
