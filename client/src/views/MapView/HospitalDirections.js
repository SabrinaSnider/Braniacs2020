import React, { useState } from 'react'
import GMaps from '../../components/GoogleMaps/GMaps'
import Instructions from '../../components/GoogleMaps/Instructions'
import axios from 'axios';

let destination = {
    latitude: 29.639375,
    longitude: -82.340842
}

function HostpitalDirections() {
    const [hostpitalDirections, setHostpitalDirections] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [token, setToken] = useState(null);

    if (token == null) {
        axios.get('/maps/token')
        .then(function (response) {
            setToken(response.data)
            console.log(token)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    let getPosition = async () => {
        await navigator.geolocation.getCurrentPosition(
            function (position) {
                setCurrentLocation({ 
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude
                })  
                console.log("position", currentLocation)  
            },
            error => {if (error) console.log(error)}
        )
    }

    getPosition()

    return (
        <div className="App">
            <div id="directions-parking-container">
                <div style = {{float: 'left', margin: '40px', width: '40vw'}}>
                    <h2>Directions to Hospital</h2>
                    <Instructions
                        directions = {hostpitalDirections}
                        key = {token}
                    />
                </div>
                <div style = {{width: `45vw`, height: `60vh`, float: 'right', margin: '40px'}}>
                <GMaps
                    googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + token}
                    loadingElement = {<div style = {{height: '100%'}}/>}
                    containerElement = {<div style = {{height: '100%'}}/>}
                    mapElement = {<div style = {{height: '100%'}}/>}
                    origin = {currentLocation}
                    destination = {destination}
                    directions = {hostpitalDirections}
                    setDirections = {setHostpitalDirections}
                    currentLocation = {currentLocation}
                    setCurrentLocation = {setCurrentLocation}
                    key = {token}
                />
                </div>
            </div>
        </div>
    );
}

export default HostpitalDirections;
