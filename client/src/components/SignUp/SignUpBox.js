import React, {useState} from 'react';
import httpUser from '../../httpUser'

const SignUpBox = (props) => {
	
    //const [fields, setFields] = useState({first: "", last: "", email: "", password: ""});
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

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
    };

    // used to submit user values for password and email
    const onFormSubmit = async (e) => {
        e.preventDefault();
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
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" type="password" class="form-control" placeholder="" onChange={onPasswordChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password2" className="form-label">Re-type Password</label>
                    <input id="password2" type="password" class="form-control" placeholder=""></input>
                </div>

                <div className="form-group" id="button-group">
					<button type="submit" id="create-page-btn" className="btn row">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpBox;
