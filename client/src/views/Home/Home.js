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
    );
}

export default Home;
