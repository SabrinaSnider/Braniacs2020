import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpBox from '../../components/SignUp/SignUpBox'

/*
    Sign up page. Displays the sign up box component.
*/
function SignUp(props) {
    return (
        <div style={{height: '100%', width: '100%', 'flexGrow' : '1'}}>
            <SignUpBox/>
        </div>
    );
}

export default SignUp;
