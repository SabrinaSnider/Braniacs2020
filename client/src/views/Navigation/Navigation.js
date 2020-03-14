import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom';
import ParkingDirections from './ParkingDirections'


function NavigationPage(props) {
    return (
        <div style={{'backgroundColor': 'white', flexGrow: '1', display: 'flex', flexDirection: 'row'}}>
            <NavBar/>
            <Switch>
                <Route exact path="/Navigation/FindUs" component={ParkingDirections}/>
                <Route exact path="/Navigation/Parking" component={ParkingDirections}/>
                <Route exact path="/Navigation/Hospital" component={ParkingDirections}/>
            </Switch>
        </div>
    );
}

export default NavigationPage;
