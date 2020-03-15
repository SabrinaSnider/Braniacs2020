import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'

const NavBar = (props) => {
    return (
        <Navbar id="navigation-menu" expand="md" style={{display: 'inline-block', flexShrink: '0'}}>
            <Nav className="flex-column" activeKey={props.option}>
                <Nav.Link href='/Navigation/GeneralInformaiton' className = "nav-menu-item" eventKey={'GeneralInformaiton'}>
                    General Information
                </Nav.Link>

                <Nav.Link href='/Navigation/Parking' className = "nav-menu-item" eventKey={'Parking'}>
                    Navigate Me to Parking
                </Nav.Link>

                <Nav.Link href='/Navigation/Hospital' className = "nav-menu-item" eventKey={'Hospital'}>
                    Navigate Me to Hospital
                </Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default NavBar;