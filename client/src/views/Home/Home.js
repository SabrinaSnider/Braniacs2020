import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar'
import HomeCarousel from '../../components/Carousel/HomeCarousel'

/*
    Home page
*/
function Home(props) {
    return (
        <div style={{'min-height': '100vh', display: 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between'}}>
            <NavBar 
                home={true}
            />
            <div className="App" style={{height: '100%', width: '100%', 'backgroundImage': `url(background.png)`, 'flexGrow' : '1'}}>
                <HomeCarousel />
            </div>
        </div>
    );
}

export default Home;
