import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignInBox from '../../components/SignIn/SignInBox'

/*
    Sign in page. Displays the sign in box component.
*/
function SignIn(props) {
    const onLoginSuccess = () => {
        props.onLoginSuccess();
    }

    return (
        <div style={{height: '100%', width: '100%', 'flexGrow' : '1'}}>
            <SignInBox {...props} onLoginSuccess={onLoginSuccess}/>
        </div>
    );
}

export default SignIn;
