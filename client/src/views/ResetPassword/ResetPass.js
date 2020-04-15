import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ResetPassword from '../../components/ResetPassword/ResetPassword'

function ResetPass(props) {
    
    return (
        <div style={{height: '100%', width: '100%', 'flexGrow' : '1'}}>
            <ResetPassword {...props} />
        </div>
    );
}

export default ResetPass;
