import React, {useState} from 'react';
import './ForgotPassword.css'
import httpUser from '../../httpUser'

const ForgotPassword = (props) => {
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState({
        email: ""
	});

	const onEmailChange = (e) => {
        e.persist();
        setEmail(e.target.value);
	};
	
	const onFormSubmit = async(e) => {
		//alert('Please check your email for further instructions. If you did not receive an email, please make sure you entered your email address properly.')
		e.preventDefault();
		const newUser = {
            email: email,
        }
		const user = await httpUser.validateEmail(newUser);
		if(user.errors !== undefined){
            setErrors({
                email: user.errors.email,
            });
		}
	}

    return (
        <div class="row">
			<div class="col-md-12">
				<form onSubmit={onFormSubmit}>
					<legend>Forgot Password</legend>
					<div class="form-group">
						<label htmlFor="email" className="form-label">Email</label>
						<input type="email" className="form-control" placeholder="" onChange = {onEmailChange}></input>
						{errors.email !== undefined &&
							<label id = "error">{errors.email}</label>
						}
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
