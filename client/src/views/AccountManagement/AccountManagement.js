import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './AccountManagement.css'
import { Form, Button, Row, Col } from 'react-bootstrap'

/*
    Account management page for viewing and displaying user information.
    Displays email, password (hidden), date of birth, first name, last name.
*/
function AccountManagement(props) {
    return (
        <div id="account-management-page">
            <h1 id="account-management-header" className="account-row">Account Informaton</h1>
            
            <Form>
                <Form.Group as={Row} className="account-row">
                    <Form.Label className="account-label">Name</Form.Label>
                    <Col>
                        <Form.Control/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="account-row">
                    <Form.Label className="account-label">Date of Birth</Form.Label>
                    <Col>
                        <Form.Control/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="account-row">
                    <Form.Label className="account-label">Email</Form.Label>
                    <Col>
                        <Form.Control/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="account-row" controlId="formBasicPassword">
                    <Form.Label className="account-label">Password</Form.Label>
                    <Col>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Button id="account-save-btn" className="account-row" variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    );
}

export default AccountManagement;
