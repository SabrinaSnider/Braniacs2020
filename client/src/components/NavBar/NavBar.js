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
    // console.log("current user", props.currentUser)
    return (
        <div style={{width: '100%'}}>
            <Navbar id="main-navbar" variant="dark" expand="md" style={{margin:'0', "backgroundColor": "#072b55", height: '100%'}}>
                {!props.home &&
                    <img src="/ufhealth-white.svg" style={{float: 'left', height: '30px',width: 'auto', 'maxHeight': '100%', 'margin': '0px 0px 10px 20px'}} alt=""></img>
                }
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="w-100 dual-collapse2">
                    <Nav className="mr-auto">
                        <Nav.Link className = "nav-item main" href='/Home'>Home</Nav.Link>
                        <Nav.Link className = "nav-item main" href='/Register'>Extra Page</Nav.Link>
                        <Nav.Link className = "nav-item main" href='/Navigation/GeneralInformaiton'>Navigation</Nav.Link>
                        {(props.currentUser && !props.isAdmin) &&
                            <Nav.Link className = "nav-item main" href='/MyAppointments'>Appointments</Nav.Link>
                        }
                        {(!props.currentUser) &&
                            <Nav.Link className = "nav-item main" href='/SignIn'>Appointments</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="w-100 dual-collapse2">
                    <Nav className="ml-auto">
                        {props.isAdmin && <Nav.Link className = "nav-item main" href='/Appointment'>Administrators</Nav.Link>}
                        {props.currentUser ?
                        (
                            <Nav.Link className = "nav-item main" href='/LogOut'>Log Out</Nav.Link>

                        ):(
                            <Nav.Link className = "nav-item main" href='/SignIn'>Sign In</Nav.Link>
                        )
                        }

                        {props.currentUser ?
                        (
                            <Nav.Link className = "nav-item main" href='/Account'>Account</Nav.Link>

                        ):(
                            <Nav.Link className = "nav-item main" href='/SignUp'>Sign Up</Nav.Link>
                        )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default NavBar;