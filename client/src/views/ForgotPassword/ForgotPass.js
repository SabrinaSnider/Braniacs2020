import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'

function ForgotPass(props) {
    
    return (
        <div style={{height: '100%', width: '100%', 'flexGrow' : '1'}}>
            <ForgotPassword {...props} />
        </div>
    );
}

export default ForgotPass;
