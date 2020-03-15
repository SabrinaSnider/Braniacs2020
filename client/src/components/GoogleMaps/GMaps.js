import React from 'react'
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"
import MapStyles from './MapStyles'

/*
    Makes a call to the Google Maps API to generate a map component. If no directions
    are provided, a static map centered at the given coordinate is displayed. If 
    directions are provided, the route is displayed on the map.
*/
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
