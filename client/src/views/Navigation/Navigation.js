import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom';
import ParkingDirections from './ParkingDirections'


function NavigationPage(props) {
    return (
        <div style={{'padding': '30px 0', 'backgroundColor': 'white', flexGrow: '1', display: 'flex', flexDirection: 'row', width: '80%', margin: 'auto'}}>
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
