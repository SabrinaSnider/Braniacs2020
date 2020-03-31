import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LogOutBox from '../../components/LogOut/LogOutBox'

/*
    Sign in page. Displays the sign in box component.
*/
function LogOut(props) {
    return (
        <div style={{height: '100%', width: '100%', 'flexGrow' : '1'}}>
            <LogOutBox  onLogOut={props.logOut}/>
        </div>
    );
}

export default LogOut;
