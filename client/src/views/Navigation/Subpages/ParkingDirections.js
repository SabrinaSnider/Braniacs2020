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
        <div style={{padding: '0px 10px'}}>
            <div id="parking-header">
                <h2>Directions to Parking</h2>
            </div>

            <div id="parking-subheader">
                {directions &&
                    <div className="directions-section">
                        <h3 className="directions-header">Time Estimate: {directions.routes[0].legs[0].duration.text}.</h3>
                        <h3 className="directions-header">Distance: {directions.routes[0].legs[0].distance.text}.</h3>
                    </div>
                }
                <Button href='https://www.google.com/maps/dir//Parking+Garage+10,+Newell+Dr,+Gainesville,+FL+32603/@29.6406927,-82.3437087,17.42z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e8a39ee4f6ccf9:0x949ff4a6f6d2cd7f!2m2!1d-82.3416633!2d29.6406203!3e0' target="_blank" style={{'max-height': '40px'}}>Open in Google Maps</Button>
            </div>

            <div id="parking-container">
                <div id="directions-container-parking">
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
        </div>
    )
}

export default ParkingDirections;
