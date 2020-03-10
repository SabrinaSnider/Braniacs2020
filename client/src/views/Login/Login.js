import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LoginBox from '../../components/Login/LoginBox'

function Login(props) {
    return (
        <div className="App" style={{height: '100%', width: '100%', 'backgroundImage': `url(background.png)`, 'flexGrow' : '1'}}>
            <LoginBox/>
        </div>
    );
}

export default Login;
