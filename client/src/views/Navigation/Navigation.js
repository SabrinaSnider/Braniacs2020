import React, { useState } from 'react'
import NavBar from './NavBar'
import { Route, Switch, useParams } from 'react-router-dom';
import ParkingDirections from './ParkingDirections'
import HospitalDirections from './HospitalDirections'

function NavigationPage(props) {
    const option = useParams().option;
    console.log('option is', option)

    return (
        <div style={{'padding': '30px 0', 'backgroundColor': 'white', flexGrow: '1', display: 'flex', flexDirection: 'row', width: '90%', margin: 'auto'}}>
            <NavBar option={option}/>
            <Switch>
                <Route exact path="/Navigation/FindUs" component={ParkingDirections}/>
                <Route exact path="/Navigation/Parking" component={ParkingDirections}/>
                <Route exact path="/Navigation/Hospital" component={HospitalDirections}/>
            </Switch>
        </div>
    );
}

export default NavigationPage;
