import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar'
import HomeCarousel from '../../components/Carousel/HomeCarousel'
/*
    Home page
*/

function Home(props) {
    const currentUser = props.currentUser;
    const isAdmin = props.isAdmin;
    return (
        <div>
            <div id="home-header">
                <div>
                <a href="/" style={{'textAlign': 'center', 'display': 'block'}}>
                    <img src="/ufhealth-white.svg" height="40px" alt=""></img>
                </a>
                </div>
                <h1 id="department-title">UF Department of Neurosurgery</h1>
            </div>
            <div style={{'min-height': '100vh', display: 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between'}}>
                <NavBar 
                    home={true}
                    currentUser = {currentUser}
                      isAdmin = {isAdmin}

                />
                <div className="App" style={{height: '100%', width: '100%', 'backgroundImage': `url(background.png)`, 'flexGrow' : '1'}}>
                    <HomeCarousel />
                </div>
        </div>
        </div>
    );
}

export default Home;
