import React, { useState, useEffect } from 'react'
import GMaps from '../../../components/GoogleMaps/GMaps'
import Directions from '../../../components/GoogleDirections/Directions'
import { updatePosition, getDirections } from '../../../components/GoogleDirections/DirectionHandler'

let destination = {
    latitude: 29.639375,
    longitude: -82.340842
}

function HostpitalDirections(props) {
    const [directions, setDirections] = useState(null);
    const [position, setPosition] = useState(null);

    // Functions passed to useEffect are executed on every component rendering
    // If values are passed to the array, useEffect will execute every time those value changes
    useEffect(() => {
        updatePosition(setPosition, destination, setDirections)
    }, [])

    return (
        <div style={{float: 'right', flexGrow: '1'}}>
            <div id="directions-parking-container" style={{display:'flex', 'flexDirection': 'row', 'justifyContent': 'center'}}>
                <div style = {{float: 'left', margin: '0px 20px 0px 40px', width: '50%'}}>
                    <h2>Directions to Hospital</h2>
                    <Directions // update instructions whenever the directions change
                        directions = {directions}
                    />
                </div>
                <div style = {{width: '50%', height: `60vh`, float: 'right', margin: '0px 40px 0px 20px'}}>
                <GMaps // update Google Maps component whenever the directions change
                    loadingElement = {<div style = {{height: '100%'}}/>}
                    containerElement = {<div style = {{height: '100%'}}/>}
                    mapElement = {<div style = {{height: '100%'}}/>}
                    directions = {directions}
                />
                </div>
            </div>
        </div>
    );
}

export default HostpitalDirections;
