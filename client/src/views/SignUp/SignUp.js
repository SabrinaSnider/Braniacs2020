import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpBox from '../../components/SignIn/SignUpBox'

function SignUp(props) {
    return (
        <div className="App" style={{height: '100%', width: '100%', 'backgroundImage': `url(background.png)`, 'flexGrow' : '1'}}>
            <SignUpBox/>
        </div>
    );
}

export default SignUp;
