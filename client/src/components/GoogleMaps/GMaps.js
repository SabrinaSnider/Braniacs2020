import React, { useEffect } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"
import MapStyles from './MapStyles'

// method to grab list of directions from google api
const getDirections = (origin, destination, directions, setDirections) => {
    if (origin == null || destination == null) return
    
    const google = window.google;
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
        origin: new google.maps.LatLng(origin.latitude, origin.longitude),
        destination: new google.maps.LatLng(destination.latitude, destination.longitude),
        travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result)
        } else {
            console.error(`error fetching directions ${result}`);
            setDirections(null)
        }
    });
}

// maybe add restriction to map to limit panning later
const MyMap = (props) => {
    useEffect(() => {
        // Functions passed to useEffect are executed on every component rendering
        // If values are passed to the array, useEffect will execute every time those value changes
        getDirections(props.origin, props.destination, props.directions, props.setDirections)
        // getLocation(props.currentLocation, props.setCurrentLocation)
    }, [props.origin, props.destination, props.token])

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
