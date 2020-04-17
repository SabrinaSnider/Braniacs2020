import React, {useState} from 'react';
import './ResetPassword.css'
import httpUser from '../../httpUser'

const ResetPassword = (props) => {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
	const [errors, setErrors] = useState({
        password: "",
        confirm: ""
	});

	const onPasswordChange = (e) => {
        e.persist();
        setPassword(e.target.value);
    };
    
    const onConfirmChange = (e) => {
        e.persist();
        setConfirm(e.target.value);
    };
	
	const onFormSubmit = async(e) => {
		//alert('Please check your email for further instructions. If you did not receive an email, please make sure you entered your email address properly.')
        e.preventDefault();
		const newUser = {
            password: password,
            confirm: confirm,
            token: props.token
        }
		const user = await httpUser.validatePasswords(newUser);
		if(user.errors !== undefined){
            setErrors({
                confirm: user.errors.confirm
            }); 
        }
    }
    
    return (
        
        <div class="row">
            <div class="col-md-12">
                <form action={"/patient/reset/" + props.token} onSubmit={onFormSubmit}>
                <legend>Reset Password</legend>
                <div class="form-group">
                    <label htmlFor="password" className="form-label">New Password</label>
                    <input id="password" type="password" class="form-control" placeholder="New password" onChange={onPasswordChange}></input>
                    {errors.password !== undefined &&
                        <label id = "error">{errors.password}</label>
                    }
                </div>
                <div class="form-group">
                    <label htmlFor="confirm" className="form-label">Confirm Password</label>
                    <input id="confirm" type="password" class="form-control" placeholder="Confirm password" onChange={onConfirmChange}></input>
                    {errors.confirm !== undefined &&
                        <label id = "error">{errors.confirm}</label>
                    }
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Update Password</button>
                </div>
                </form>
            </div>
        </div>  
        
       /*
       <div class="row">
            <div class="col-md-12">
                <form action={"/patient/reset/" + props.token} method="POST">
                <legend>Reset Password</legend>
                <div class="form-group">
                    <label for="password">New Password</label>
                    <input type="password" name="password" placeholder="New password" autofocus="autofocus" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder="Confirm password" class="form-control"/>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Update Password</button>
                </div>
                </form>
            </div>
        </div>  
        */
    );
}

export default ResetPassword;
