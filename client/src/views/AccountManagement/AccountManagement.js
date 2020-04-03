import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './AccountManagement.css'
import { Form, Button, Card } from 'react-bootstrap'
import DatePickerBasic from '../../components/DatePicker/DatePickerBasic'
import axios from 'axios';
var ObjectId = require('mongodb').ObjectId;

/*
    Account management page for viewing and displaying user information.
    Displays email, date of birth, first name, last name.
*/


function AccountManagement(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [dob, setDob] = useState(new Date())

    const GetAccountInfo = async() => {
        axios.post("/patient/useraccount", {
            email: props.currentUser.email,
        })
        .then(function (response) {
            console.log("response is", response)
            if (response.data.name.first) setFirstName(response.data.name.first)
            if (response.data.name.last) setLastName(response.data.name.last)
            if (response.data.email) setEmail(response.data.email)
            if (response.data.dob) setDob(response.data.dob)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    useEffect(()=>{
        GetAccountInfo();
    }, [])

    const updateData = (event) => {
        event.preventDefault();
        
        axios.post("/patient/update", {
            name: {
                first: firstName,
                last: lastName
            },
            dob: dob,
            email: email
        }).then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });   
    }

    return (
        <Card id="account-management-page">
            <h1 id="account-management-header" className="account-row">Account Informaton</h1>

            <Form>
                <Form.Group className="account-row">
                    <h2 className="account-label">First name</h2>
                    <Form.Control value={firstName}  onChange={event => setFirstName(event.target.value)}/>
                </Form.Group>

                <Form.Group className="account-row">
                    <h2 className="account-label">Last name</h2>
                    <Form.Control value={lastName}  onChange={event => setLastName(event.target.value)}/>
                </Form.Group>

                <Form.Group className="account-row last-row">
                    <h2 className="account-label">Date of Birth</h2>
                    <DatePickerBasic
                        date = {dob}
                        setDate = {setDob}
                    />
                </Form.Group>

                <Form.Group className="account-row">
                    <h2 className="account-label">Email</h2>
                    <Form.Control value={email}  onChange={event => setEmail(event.target.value)}/>
                </Form.Group>

                <Button id="account-save-btn" className="account-row" variant="primary" type="submit" onClick={updateData}>
                    Save
                </Button>
            </Form>
        </Card>
    );
}

export default AccountManagement;
