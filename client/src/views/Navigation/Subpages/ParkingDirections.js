import React, { useState, useEffect } from 'react'
import GMaps from '../../../components/GoogleMaps/GMaps'
import Directions from '../../../components/GoogleDirections/Directions'
import { updatePosition, getDirections } from '../../../components/GoogleDirections/DirectionHandler'
import { Card, Button, Form } from 'react-bootstrap'
import "./ParkingDirections.css"
import PlacesAutocomplete from '../../../components/PlacesAutocomplete/PlacesAutocomplete'

/*
    Hospital directions section on the navigation page. Uses the user's current geolocation
    to display auto-generated directions to the parking.
*/

let destination = {
    latitude: 29.640730,
    longitude: -82.341597
}

function ParkingDirections(props) {
    const [directions, setDirections] = useState(null);
    const [position, setPosition] = useState(null);

    // Functions passed to useEffect are executed on every component rendering
    // If values are passed to the array, useEffect will execute every time those value changes
    useEffect(() => {
        getDirections(position, destination, setDirections)
    }, [position])

    useEffect(() => {
        updatePosition(setPosition, destination, setDirections)
    }, [])

    return (
        <div id="parking-container">
            <div id="parking-header">
                <h2>Directions to Parking Lot</h2>
                <Button href='https://www.google.com/maps/dir//UF+Department+of+Neurosurgery,+Southwest+Archer+Road+%231097,+Gainesville,+FL/@29.6396834,-82.3794005,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x88e8a39e42a9d089:0xff5d2d7f10057cd9!2m2!1d-82.344381!2d29.639688!3e0' target="_blank" style={{'max-height': '40px'}}>Google Maps</Button>
            </div>

            <div id="parking-subheader">
                {directions &&
                    <div id="directions-section">
                        <h3 className="directions-header">Time Estimate: {directions.routes[0].legs[0].duration.text}.</h3>
                        <h3 className="directions-header">Distance: {directions.routes[0].legs[0].distance.text}.</h3>
                    </div>
                }
                <PlacesAutocomplete 
                    position = {position}
                    setPosition = {setPosition}
                />
            </div>

            <div id="parking-content">
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
    );
}

export default ParkingDirections;