import React from 'react';
import './LoginBox.css'

function LoginBox() {
    return (
        <div>
            <form id="container">
                <h2 id="title">Sign in to your Account</h2>

                <div class="form-group">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="Enter email"></input>
                </div>

                <div class="form-group">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Password"></input>
                </div>

                <div class="form-group" id="button-group">
                    <button type="button" id="login-btn" className="btn row">Login</button>
                    <button type="button" id="create-btn" className="btn row">Create Account</button>
                </div>
                <p id="forgot-pwd" className="row">Forgot Password?</p>
            </form>
        </div>
    );
}

export default LoginBox;
