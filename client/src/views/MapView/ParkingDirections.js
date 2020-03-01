import React, { useState } from 'react'
import GMaps from '../../components/GoogleMaps/GMaps'
import Instructions from '../../components/GoogleMaps/Instructions'
import '../../components/GoogleMaps/Instructions.css'
import axios from 'axios';

let origin = [29.66, -82.41]
let destination = [29.640730, -82.341597]

const ParkingDirections = () => {
    const [parkingDirections, setParkingDirections] = useState(null);
    const [currentLocation, setCurrentLocation] = useState("");
    const [token, setToken] = useState(null);

    axios.get('/maps/token')
    .then(function (response) {
        setToken(response.data)
        console.log(token)
    })
    .catch(function (error) {
        console.log(error);
    })
    

    return (
        <div className="App" style={{'background-color': 'white'}}>
            <div id="directions-parking-container">
                <div style = {{float: 'left', padding: '30px', width: '50%'}}>
                    <h2>Parking Lot Navigation</h2>

                    <div style={{width: "45vw%",  overflow: 'auto'}}>
                        <p class="search-box-label"> Coming from </p>
                        <input id="start-location-search" placeholder="Current Location" value={currentLocation}
                            style={{ maxWidth: 800, float: "left"}}/>
                    </div>

                    <Instructions
                        directions = {parkingDirections}
                        key = {token}
                    />
                </div>
                <div style = {{width: `40vw`, padding: '30px', height: `60vh`, float: 'right'}}>
                    <GMaps
                        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + token}
                        loadingElement = {<div style = {{height: '100%'}}/>}
                        containerElement = {<div style = {{height: '100%'}}/>}
                        mapElement = {<div style = {{height: '100%'}}/>}
                        origin = {origin}
                        destination = {destination}
                        directions = {parkingDirections}
                        setDirections = {setParkingDirections}
                        key = {token}
                    />
                </div>
            </div>
            <div style = {{float: 'left', margin: '30px', width: '45vw'}}>
                <h2>Parking information</h2>
                <p style={{'text-align': 'left'}}>
                    <li>
                        Valet parking is available in the front circle of the hospital ($3 with a patient 
                        or patient visitor parking voucher). Patients and visitors must ask for a parking 
                        voucher at the check-out area, nurses’ station or other designated area when leaving 
                        their location of service and present it to the attendant upon exiting the garage. 
                        Please be advised that parking is cash only.
                    </li>
                    <li>
                        If patients or visitors do not wish to valet, a 600-space parking garage is available 
                        adjacent to the hospital. A covered walkway from the garage leads into the lobby of 
                        the building.
                    </li>
                </p>
            </div>
        </div>
    )
}

export default ParkingDirections;
