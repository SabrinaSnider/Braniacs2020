import React from 'react';
import { useHistory } from 'react-router-dom';
import './SignInBox.css'

/*
    Sign in box component
*/
function SignInBox() {
	const history = useHistory();
    return (
        <div>
            <form id="container">
                <h2 id="title" style={{fontSize: '2em'}}>Sign in to your Account</h2>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder=""></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder=""></input>
                </div>

                <div className="form-group" id="button-group">
                    <button type="button" id="login-btn" className="btn row">Login</button>
                    <button type="button" id="create-btn" className="btn row" onClick={() => {history.push('/SignUp')}}>Create Account</button>
                </div>
                <p id="forgot-pwd" className="row">Forgot Password?</p>
            </form>
        </div>
    );
}

export default SignInBox;
