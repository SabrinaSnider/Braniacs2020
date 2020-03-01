import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-title" to="/">
                <img className = "nav-logo" src={ "/logo192.png" } alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Home'>Home</Link>
                <Link className = "nav-link" to='/ParkingDirections'>Parking Directions</Link>
                <Link className = "nav-link" to='/HospitalDirections'>Hospital Directions</Link>
            </div>

        </div>
    )
};

export default NavBar;
