import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    return (
        <div style={{width: '100%'}}>
            <div style={{padding:"20px 40px", display: 'flex', 'align-items': 'center', "background-color": "#ffffff"}}>
                <img src="/UFhealth.png" height="80px" style={{float:'left'}} alt=""></img>
                <h1 id="department-title">UF Department of Neurosurgery</h1>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{margin:'0', "background-color": "#ffffff", padding: '0 40px'}}>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav" style={{padding: "0px"}}>
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link className = "nav-link" to='/Home'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className = "nav-link" to='/Register'>Extra Page</Link>
                    </li>
                    <li class="nav-item">
                        <a className = "nav-link" target='_blank' rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">
                            React Docs
                        </a>
                    </li>
                    <li class="nav-item">
                        <a className = "nav-link" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a>
                    </li>
                    <li class="nav-item">
                        <a className = "nav-link" target="_blank" rel="noopener norefferer" href="https://nodejs.org/en/docs/">Node Docs</a>
                    </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link className = "nav-link" to='/Help'>Help</Link>
                    </li>
                    <li class="nav-item">
                        <Link className = "nav-link" to='/Login'>Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link className = "nav-link" to='/Login'>Sign up</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;
