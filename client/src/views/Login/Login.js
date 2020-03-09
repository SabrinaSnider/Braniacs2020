import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
    return (
        <div className="App" style={{height: '100%', width: '100%', 'backgroundImage': `url(background.png)`, 'flexGrow' : '1'}}>
            <div style={{backgroundColor: '#EAEAEA', margin:'20px auto', width: '80vw', height: '70vh'}}>
                <h1>Login To Access Appointments</h1>
                <button type="button" class="btn btn-dark">Login</button>
                <button type="button" class="btn btn-outline-dark">Create Account</button>
                <p>Forgot Password?</p>
            </div>
        </div>
    );
}

export default Login;
