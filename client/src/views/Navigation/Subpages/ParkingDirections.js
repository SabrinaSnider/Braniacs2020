import React, { useState, useEffect } from 'react'
import GMaps from '../../../components/GoogleMaps/GMaps'
import Directions from '../../../components/GoogleDirections/Directions'
import { updatePosition } from '../../../components/GoogleDirections/DirectionHandler'
import { Card, Button } from 'react-bootstrap'
import "./ParkingDirections.css"

let destination = {
    latitude: 29.640730,
    longitude: -82.341597
}

/*
    Parking directions section on the navigation page. Uses the user's current geolocation
    to display auto-generated directions to the parking lot.
*/
const ParkingDirections = () => {
    const [directions, setDirections] = useState(null);
    const [position, setPosition] = useState(null);

    // Functions passed to useEffect are executed on every component rendering
    // If values are passed to the array, useEffect will execute every time those value changes
    useEffect(() => {
        updatePosition(setPosition, destination, setDirections)
    }, [])

    return (
        <div id="parking-container">
            <div id="directions-container-parking">
                <h2>Directions to Parking</h2>
                <Directions // update instructions whenever the directions change
                    directions = {directions}
                />
            </div>
            <Card id="maps-contianer-parking">
                <GMaps // update Google Maps component whenever the directions change
                    loadingElement = {<div style = {{height: '100%'}}/>}
                    containerElement = {<div style = {{height: '100%'}}/>}
                    mapElement = {<div style = {{height: '100%'}}/>}
                    directions = {directions}
                />
            </Card>
        </div>
    )
}

export default ParkingDirections;
