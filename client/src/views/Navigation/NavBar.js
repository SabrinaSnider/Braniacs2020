import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'

const NavBar = () => {
    const [selected, setSelected] = useState(1);

    const handleSelect = (key) => {
        setSelected(key)
        console.log(key)
    }

    return (
        <Navbar id="navigation-menu" expand="md" style={{display: 'inline-block', flexShrink: '0'}}>
            <Nav className="flex-column" activeKey={selected} onSelect={handleSelect}>
                <Nav.Link href='/Navigation/FindUs' className = "nav-menu-item" eventKey={1}>
                    Contact and Find Us
                </Nav.Link>

                <Nav.Link href='/Navigation/Parking' className = "nav-menu-item" eventKey={2}>
                    Navigate Me to Parking
                </Nav.Link>

                <Nav.Link href='/Navigation/Hospital' className = "nav-menu-item" eventKey={3}>
                    Navigate Me to Hospital
                </Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default NavBar;