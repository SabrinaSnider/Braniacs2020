import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = (props) => {
    return (
        <div style={{width: '100%'}}>
            {props.home && 
                <div style={{padding:"20px 40px", display: 'flex', 'alignItems': 'center', "backgroundColor": "#ffffff"}}>
                    <img src="/UFhealth.png" height="60px" style={{float:'left'}} alt=""></img>
                    <h1 id="department-title">UF Department of Neurosurgery</h1>
                </div>
            }
            <nav id="main-navbar" className="navbar navbar-expand-md navbar-light" style={{margin:'0', "backgroundColor": "#ffffff", height: '100%'}}>
                {!props.home &&
                    <img src="/UFhealth.png" style={{float: 'left', height: '8vh', width: 'auto', 'maxHeight': '100%', 'margin': '0px 0px 0px 20px'}} alt=""></img>
                }
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100 order-1 order-md-0 dual-collapse2" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className = "nav-link" to='/Home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/Register'>Extra Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/Navigation/GeneralInformaiton'>Navigation</Link>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className = "nav-link" to='/Help'>Help</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/SignIn'>Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/SignUp'>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;