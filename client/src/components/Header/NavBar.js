import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    return (
        <div style={{width: '100%'}}>
            <div style={{padding:"20px 40px", display: 'flex', 'alignItems': 'center', "backgroundColor": "#ffffff"}}>
                <img src="/UFhealth.png" height="80px" style={{float:'left'}} alt=""></img>
                <h1 id="department-title">UF Department of Neurosurgery</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{margin:'0', "backgroundColor": "#ffffff", padding: '0 40px'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{padding: "0px"}}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className = "nav-link" to='/Home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/Register'>Extra Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/ParkingDirections'>Parking Directions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/HospitalDirections'>Hospital Directions</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav mr-auto" style={{'float': 'right'}}>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/Help'>Help</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/Login'>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to='/Login'>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;