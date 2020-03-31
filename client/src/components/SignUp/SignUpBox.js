import React, {useState} from 'react';
import './SignUpBox.css'
import httpUser from '../../httpUser'
import axios from 'axios'

const SignUpBox = (props) => {
	
    //const [fields, setFields] = useState({first: "", last: "", email: "", password: ""});
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({
        password: "",
        email: "",
        password2: ""
    });

    // used to update user input for either password or email
    const onFirstChange = (e) => {
        e.persist();
        setFirst(e.target.value);
    };

    const onLastChange = (e) => {
        e.persist();
        setLast(e.target.value);
    };

    const onEmailChange = (e) => {
        e.persist();
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        e.persist();
        setPassword(e.target.value);
        if(password.length < 5 || password.length > 18){
            setErrors(errors => ({...errors, password: "Passwords must be at least 6 characters and no more than 18 characters"}));
        } else{
            setErrors(errors => ({...errors, password: ""}));
        }

    };

    const onPassword2Change = (e) => {
        e.persist();
        setPassword2(e.target.value);
    };

    // var emailsInUse = [];
	// //Check emails for uniqueness
	// function checkEmail(thisEmail){
        
    //     axios.get("/patient/emails").then(function (response){
    //         emailsInUse = response.data;
    //         for(let i=0;i<emailsInUse.size;i++){
    //             console.log(emailsInUse[i].email);
    //             if (thisEmail === emailsInUse[i].email)
    //                inUse = false
    //         }
    //         return inUse;
    //     });

		
	// }

    // used to submit user values for password and email
    const onFormSubmit = async (e) => {
        e.preventDefault();
        if(errors.password !== ""){
        }
        else if(email === ""){
            setErrors(errors => ({...errors, email: "Must have an email to create an account"}));
            setErrors(errors => ({...errors, password: ""}));
        } else if(password === "" || password2 ===""){
            setErrors(errors => ({...errors, password: "Must have a password to create an account"}));
            setErrors(errors => ({...errors, email: ""}));
        }
        else if(password !== password2 || !password2){
            setErrors(errors => ({...errors, password: "Passwords must be the same"}));
        }
        // else if(!checkEmail(email)){
        //         setErrors(errors => ({...errors, email: "That email already has an account. Please log in"}));
        //         setErrors(errors => ({...errors, password: ""}));
        // }
        else{
            setErrors(errors => ({...errors, email: ""}));
            const newUser = {
                name: {
                    first: first,
                    last: last
                },
                email: email,
                password: password
            }
            const user = await httpUser.signUp(newUser);

            if(user) {
                console.log(props);
                props.onLoginSuccess(); //input: user
                props.history.push('/Home');
            }
        }
    };
	
	/*div SEMESSAGE: placeholder for success/error message, once I figureo ut how states work*/
    return (
        <div>
            <form id="container" onSubmit={onFormSubmit}>
                <h2 id="title" style={{fontSize: '2em'}}>Create Your Account</h2>

				<div id="semessage">
				</div>
                <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input id="firstName" type="text" class="form-control" placeholder="" onChange={onFirstChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input id="lastName" type="text" class="form-control" placeholder="" onChange={onLastChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" type="email" class="form-control" placeholder="" onChange={onEmailChange}></input>
                    {errors.email &&
                        <label id = "error">{errors.email}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" type="password" class="form-control" placeholder="" onChange={onPasswordChange}></input>
                    {errors.password &&
                        <label id = "error">{errors.password}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="password2" className="form-label">Re-type Password</label>
                    <input id="password2" type="password" class="form-control" placeholder="" onChange={onPassword2Change}></input>
                    {errors.password2 &&
                        <label id = "error">{errors.password2}</label>
                    }
                </div>

                <div className="form-group" id="button-group">
					<button type="submit" id="create-page-btn" className="btn row">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpBox;
