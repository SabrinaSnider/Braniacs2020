import React, {useState} from 'react';
import './ForgotPassword.css'
import httpUser from '../../httpUser'

const ForgotPassword = (props) => {
    return (
        <div class="row">
			<div class="col-md-12">
				<form action="/patient/forgot" method="POST">
					<legend>Forgot Password</legend>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" name="email" autofocus class="form-control"></input>
					</div>
					<div class="form-group">
						<input type="submit" class="btn btn-primary" value="Reset Password"></input>
					</div>
				</form>
			</div>
		</div>
    );
}

export default ForgotPassword;
