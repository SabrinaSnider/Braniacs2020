import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import NavBarHome from './NavBarHome'
import HomeCarousel from './Carousel/HomeCarousel'

function Home(props) {
    return (
        <div style={{'min-height': '100vh', display: 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between'}}>
            <NavBarHome />
            <div className="App" style={{height: '100%', width: '100%', 'backgroundImage': `url(background.png)`, 'flexGrow' : '1'}}>
                <HomeCarousel />
            </div>
        </div>
    );
}

export default Home;
