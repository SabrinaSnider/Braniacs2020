import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

function Home() {
    return (
        <div className="App" style={{height: '100%', width: '100%', 'backgroundImage': `url(background.png)`, 'flexGrow' : '1'}}>
            <div style={{backgroundColor: 'gray', margin:'20px auto', width: '50vw', height: '50vh'}}>
                <p style={{"fontSize": "2rem"}}>This is a placeholder for the landing page</p>
            </div>
        </div>
    );
}

export default Home;
