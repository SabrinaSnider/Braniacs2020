import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './AccountManagement.css'
import { Form, Button, Card } from 'react-bootstrap'

/*
    Account management page for viewing and displaying user information.
    Displays email, date of birth, first name, last name.
*/
function AccountManagement(props) {
    return (
        <Card id="account-management-page">
            <h1 id="account-management-header" className="account-row">Account Informaton</h1>

            <Form>
                <Form.Group className="account-row">
                    <h2 className="account-label">First name</h2>
                    <Form.Control defaultValue="name1"/>
                </Form.Group>

                <Form.Group className="account-row">
                    <h2 className="account-label">Last name</h2>
                    <Form.Control defaultValue="name1"/>
                </Form.Group>

                <Form.Group className="account-row">
                    <h2 className="account-label">Email</h2>
                    <Form.Control defaultValue="name1 name2"/>
                </Form.Group>

                <Form.Group className="account-row last-row">
                    <h2 className="account-label">Date of Birth</h2>
                    <Form.Control defaultValue="name1 name2"/>
                </Form.Group>

                <Button id="account-save-btn" className="account-row" variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </Card>
    );
}

export default AccountManagement;
