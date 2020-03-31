import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'

const LogOutBox = (props) => {
    useEffect((props) => {
        props.onLogOut();
    }, []);

    return <Redirect to="/login" />
};

export default LogOutBox;