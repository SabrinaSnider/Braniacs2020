import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import ResetPassword from '../../components/ResetPassword/ResetPassword'
import axios from 'axios'

function ResetPass(props) {
    console.log('front end');

    const { token } = useParams();
    const [validated, setValidated] = useState(false);

    useEffect(()=>{
        ValidateLink();
    }, [])

    const ValidateLink = async() => {
        axios.post("/patient/reset/validate/", {
            token: token
        })
        .then(function (response) {
            console.log("response is", response)
            setValidated(response.data.validated);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    return (
        <div style={{height: '100%', width: '100%', 'flexGrow' : '1'}}>
            {validated && 
                <ResetPassword
                    token = {token}
                />
            }
        </div>
    );
}

export default ResetPass;
