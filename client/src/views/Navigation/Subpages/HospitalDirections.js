import React, { useState, useEffect } from 'react'
import GMaps from '../../../components/GoogleMaps/GMaps'
import Directions from '../../../components/GoogleDirections/Directions'
import { updatePosition } from '../../../components/GoogleDirections/DirectionHandler'
import { Card, Button, Form } from 'react-bootstrap'
import "./HospitalDirections.css"

let destination = {
    latitude: 29.639375,
    longitude: -82.340842
}

/*
    Hospital directions section on the navigation page. Uses the user's current geolocation
    to display auto-generated directions to the hospital.
*/
function HostpitalDirections(props) {
    const [directions, setDirections] = useState(null);
    const [position, setPosition] = useState(null);

    // Functions passed to useEffect are executed on every component rendering
    // If values are passed to the array, useEffect will execute every time those value changes
    useEffect(() => {
        updatePosition(setPosition, destination, setDirections)
    }, [])

    return (
        <div style={{padding: '0px 10px'}}>
            <div id="hospital-header">
                <h2>Directions to Hospital</h2>
                <Button>Open in Google Maps</Button>
            </div>

            <div id="hospital-subheader">
                {directions &&
                    <div className="directions-section">
                        <h3 className="directions-header">Time Estimate: {directions.routes[0].legs[0].duration.text}.</h3>
                        <h3 className="directions-header">Distance: {directions.routes[0].legs[0].distance.text}.</h3>
                    </div>
                }
                <Form id="hospital-address-form">
                    <h3 className="directions-header" style={{flexShrink: 0, margin: 'auto'}}>Start point:</h3>
                    <Form.Control className="hospital" placeholder={"Current Position"}  onChange={event => setPosition(position)}/>
                </Form>
            </div>

            <div id="hospital-container">
                <div id="directions-container-hospital">
                    <Directions // update instructions whenever the directions change
                        directions = {directions}
                    />
                </div>

                <Card id="maps-contianer-hospital">
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

export default HostpitalDirections;
