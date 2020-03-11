import React from 'react';
import './SignUpBox.css'

function SignUpBox() {
    return (
        <div>
            <form id="container">
                <h2 id="title" style={{fontSize: '2em'}}>Create Your Account</h2>

                <div class="form-group">
                    <label for="email" className="form-label">First Name</label>
                    <input type="email" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="email" className="form-label">Last Name</label>
                    <input type="email" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group" id="button-group">
                    <button type="button" id="create-page-btn" className="btn row">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpBox;
