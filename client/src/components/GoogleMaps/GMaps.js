import React, { useState, useEffect } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"
import MapStyles from './MapStyles'

// method to grab list of directions from google api
const getDirections = (origin, destination, directions, setDirections) => {
    const google = window.google;
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
        origin: new google.maps.LatLng(origin[0], origin[1]),
        destination: new google.maps.LatLng(destination[0], destination[1]),
        travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            console.log('Directions are:', result)
            setDirections(result)
        } else {
            console.error(`error fetching directions ${result}`);
            setDirections(null)
        }
    });
}

// maybe add restriction to map to limit panning later
const MyMap = (props) => {
    const google = window.google;

    useEffect(() => {
        // Functions passed to useEffect are executed on every component rendering
        // If values are passed to the array, useEffect will execute every time those value changes
        getDirections(props.origin, props.destination, props.directions, props.setDirections)
    }, [props.origin, props.destination])

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
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

const GMaps = withScriptjs(withGoogleMap(MyMap))

export default GMaps
