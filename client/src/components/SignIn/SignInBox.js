import React, {useState} from 'react';
import './SignInBox.css'
import httpUser from '../../httpUser'

/*
    Sign in box component
*/
const SignInBox = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        password: "",
        email: ""
    });

    // used to update user input for either password or email
    const onEmailChange = (e) => {
        e.persist();
        
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        e.persist();
        setPassword(e.target.value);
    }

    // used to submit user values for password and email
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        const user = await httpUser.logIn(newUser);

        console.log(user);
        if(user.errors !== undefined){
            setErrors({
                email: user.errors.email,
                password: user.errors.password
            });
        }
       
        else if(user.token) {
            props.onLoginSuccess(user.token, user.id);
            props.history.push('/Home');
        }
    };

    return (
        <div>
            <form id="container" onSubmit={onFormSubmit}>
                <h2 id="title" style={{fontSize: '2em'}}>Sign in to your Account</h2>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="" onChange = {onEmailChange}></input>
                    {errors.email !== undefined &&
                        <label id = "error">{errors.email}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="" onChange={onPasswordChange}></input>
                    {errors.password !== undefined &&
                        <label id = "error">{errors.password}</label>
                    }
                </div>

                <div className="form-group" id="button-group">
                    <button type="submit" id="login-btn" className="btn row">Login</button>
                    <button type="button" id="create-btn" className="btn row" onClick={() => {props.history.push('/SignUp')}}>Create Account</button>
                </div>
                <p id="forgot-pwd" className="row">Forgot Password?</p>
            </form>
        </div>
    );
}

export default SignInBox;
