import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './AccountManagement.css'
import { Form, Button, Card } from 'react-bootstrap'
import DatePickerBasic from '../../components/DatePicker/DatePickerBasic'

/*
    Account management page for viewing and displaying user information.
    Displays email, date of birth, first name, last name.
*/
function AccountManagement(props) {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState("starter")
    const [email, setEmail] = useState()
    const [date, setDate] = useState()

    const updateData = () => {
        console.log(lastName);
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
                        date = {date}
                        setDate = {setDate}
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
