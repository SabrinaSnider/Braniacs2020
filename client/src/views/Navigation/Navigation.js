import React from 'react'
import NavBar from '../../components/NavigationNavBar/NavBar'
import { Route, Switch, useParams } from 'react-router-dom';
import ParkingDirections from './Subpages/ParkingDirections'
import HospitalDirections from './Subpages/HospitalDirections'
import GeneralInformaiton from './Subpages/GeneralInformation'
import './Navigation.css'

function NavigationPage(props) {
    const option = useParams().option;

    return (
        <div id="navigation-page-container">
            <NavBar option={option}/>
            <Switch>
                <Route exact path="/Navigation/GeneralInformaiton" component={GeneralInformaiton}/>
                <Route exact path="/Navigation/Parking" component={ParkingDirections}/>
                <Route exact path="/Navigation/Hospital" component={HospitalDirections}/>
            </Switch>
        </div>
    );
}

export default NavigationPage;
