import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignInBox from '../../components/SignIn/SignInBox'

function SignIn(props) {
    return (
        <div className="App" style={{height: '100%', width: '100%', 'backgroundImage': `url(background.png)`, 'flexGrow' : '1'}}>
            <SignInBox/>
        </div>
    );
}

export default SignIn;
