import React, {useState} from 'react';
import './SignUpBox.css'
import httpUser from '../../httpUser'

const SignUpBox = (props) => {
	
    //const [fields, setFields] = useState({first: "", last: "", email: "", password: ""});
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [errors, setErrors] = useState({
        first: "",
        last: "",
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
        // if(password.length < 5 || password.length > 18){
        //     setErrors(errors => ({...errors, password: "Passwords must be at least 6 characters and no more than 18 characters"}));
        // } else{
        //     setErrors(errors => ({...errors, password: ""}));
        // }

    };

    const onPassword2Change = (e) => {
        e.persist();
        setPassword2(e.target.value);
    };

    // const checkEmails =  function(emails, newEmail){
    //     console.log(emails.length);
    //     for(let i=0;i<emails.length;i++){
    //         console.log(emails[i]);
    //         if (newEmail === emails[i].email)
    //             return false;
    //     }
    //     return true;
    // }

	//Check emails for uniqueness
	// function checkEmail(thisEmail){
    //     let emailsInUse = [];
    //     axios.get("/patient/emails").then(function (response){
    //         emailsInUse = (response.data);
    //         let hasAccount = checkEmails(emailsInUse, thisEmail);
    //         return hasAccount;
    //     });	        
	// }

    // used to submit user values for password and email
    const onFormSubmit = async (e) => {
        e.preventDefault();
            const newUser = {
                name: {
                    first: first,
                    last: last
                },
                email: email,
                password: password,
                password2: password2
            }
            const user = await httpUser.signUp(newUser);
            console.log("Errors frontend",user.errors);
            if(user.errors !== undefined){
                setErrors({
                    first: user.errors.first,
                    last: user.errors.last,
                    email: user.errors.email,
                    password: user.errors.password
                });
                
                console.log(errors);
            } 
            else if(user) {
                console.log(props);
                props.onLoginSuccess(); //input: user
                props.history.push('/Home');
            }
        }
	
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
                    {errors.first !== undefined &&
                        <label id = "error">{errors.first}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input id="lastName" type="text" class="form-control" placeholder="" onChange={onLastChange}></input>
                    {errors.last !== undefined &&
                        <label id = "error">{errors.last}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" type="email" class="form-control" placeholder="" onChange={onEmailChange}></input>
                    {errors.email !== undefined &&
                        <label id = "error">{errors.email}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" type="password" class="form-control" placeholder="" onChange={onPasswordChange}></input>
                    {errors.password !== undefined &&
                        <label id = "error">{errors.password}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="password2" className="form-label">Re-type Password</label>
                    <input id="password2" type="password" class="form-control" placeholder="" onChange={onPassword2Change}></input>
                    {/*errors.password2 &&
                        <label id = "error">{errors.password2}</label>
                    */}
                </div>

                <div className="form-group" id="button-group">
					<button type="submit" id="create-page-btn" className="btn row">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpBox;
