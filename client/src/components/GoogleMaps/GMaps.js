import React, { useEffect } from 'react'
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
            setDirections(result)
        } else {
            console.error(`error fetching directions ${result}`);
            setDirections(null)
        }
    });
}

const getLocation = (location, setLocation) => { // TODO: actually make this work
    let position = async () => {
        await navigator.geolocation.getCurrentPosition(
            // position => setLocation({ 
            //     latitude: position.coords.latitude, 
            //     longitude: position.coords.longitude
            // }),
            position => console.log("Position is", position),
            err => console.log(err)
        );
    }
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
