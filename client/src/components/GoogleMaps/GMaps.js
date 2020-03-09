import React from 'react'
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"
import MapStyles from './MapStyles'

const MyMap = (props) => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 29.639455, lng: -82.340855}}
            defaultOptions = {{
                styles: MapStyles, 
                fullscreenControl: false, 
                streetViewControl: false, 
                mapTypeControl: false
            }}
        >
            {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
    )
}

const GMaps = withGoogleMap(MyMap)

export default GMaps
