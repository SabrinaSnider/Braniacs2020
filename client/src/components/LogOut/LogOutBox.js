import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'

const LogOutBox = (props) => {
    // useEffect((props) => {
    //     props.logOut();
    // }, []);

    props.logOut();
    alert('You have successfully logged out')

    return <Redirect to="/Home" />
};

export default LogOutBox;