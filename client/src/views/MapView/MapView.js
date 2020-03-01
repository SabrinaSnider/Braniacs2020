import React, { useState, useEffect } from 'react'
import GMaps from '../../components/GoogleMaps/GMaps'
import Instructions from '../../components/GoogleMaps/Instructions'

let token = ''

let origin = [41.8507300, -87.6512600]
let destination = [42, -88]

function MapView() {
    const [directions, setDirections] = useState(null);

    return (
        <div className="App">
            <div style = {{float: 'left', margin: '40px'}}>
                <Instructions
                    directions = {directions}
                />
            </div>
            <div style = {{width: `45vw`, height: `60vh`, float: 'right', margin: '40px'}}>
            <GMaps
                googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + token}
                loadingElement = {<div style = {{height: '100%'}}/>}
                containerElement = {<div style = {{height: '100%'}}/>}
                mapElement = {<div style = {{height: '100%'}}/>}
                origin = {origin}
                destination = {destination}
                directions = {directions}
                setDirections = {setDirections}
            />
            </div>
        </div>
    );
}

export default MapView;
