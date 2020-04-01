import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';

/*
    Main navigation bar for the website, styled with bootstrap stylesheets. Since
    bootstrap functionality does not work in react apps, a wrapper npm module called
    react-bootstrap is used to give bootstrap functionality (like the menu toggle 
    button in this component).

    The home prop toggles certain aspects of the navbar to make the home page have a 
    different navbar.
*/
const NavBar = (props) => {
    console.log("current user", props.currentUser)
    return (
        <div style={{width: '100%'}}>
            {props.home && 
                <div style={{padding:"20px 40px", display: 'flex', 'alignItems': 'center', "backgroundColor": "#ffffff"}}>
                    <img src="/UFhealth.png" height="60px" style={{float:'left'}} alt=""></img>
                    <h1 id="department-title">UF Department of Neurosurgery</h1>
                </div>
            }
            <Navbar id="main-navbar" expand="md" style={{margin:'0', "backgroundColor": "#ffffff", height: '100%'}}>
                {!props.home &&
                    <img src="/UFhealth.png" style={{float: 'left', height: '8vh', width: 'auto', 'maxHeight': '100%', 'margin': '0px 0px 0px 20px'}} alt=""></img>
                }
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="w-100 dual-collapse2">
                    <Nav className="mr-auto">
                        <Nav.Link className = "nav-item" href='/Home'>Home</Nav.Link>
                        <Nav.Link className = "nav-item" href='/Register'>Extra Page</Nav.Link>
                        <Nav.Link className = "nav-item" href='/Navigation/GeneralInformaiton'>Navigation</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="w-100 dual-collapse2">
                    <Nav className="ml-auto">
                        <Nav.Link className = "nav-item" href='/Appointment'>Administrators</Nav.Link>
                        <Nav.Link className = "nav-item" href='/Help'>Help</Nav.Link>
                        {props.currentUser ?
                        (
                            <Nav.Link className = "nav-item" href='/LogOut'>Log Out</Nav.Link>

                        ):(
                            <Nav.Link className = "nav-item" href='/SignIn'>Sign In</Nav.Link>
                        )
                        }

                        {props.currentUser ?
                        (
                            <Nav.Link className = "nav-item" href='/Account'>Account</Nav.Link>

                        ):(
                            <Nav.Link className = "nav-item" href='/SignIn'>Sign Up</Nav.Link>
                        )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default NavBar;