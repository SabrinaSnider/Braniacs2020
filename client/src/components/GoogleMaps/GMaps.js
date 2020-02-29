import React, { useState, useEffect } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"
import MapStyles from './MapStyles'

let origin = [41.8507300, -87.6512600]
let destination = [41.8525800, -87.6514100]

const MyMap = (props) => {
    const google = window.google;
    const [directions, setDirections] = useState(null);

    useEffect(() => {
        // Functions passed to useEffect are executed on every component rendering
        // If values are passed to the array, useEffect will execute every time those value changes
        const DirectionsService = new google.maps.DirectionsService();
        console.log("Props are:", props)

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
            }
        });
    }, [props.origin, props.destination])

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
            defaultOptions = {{styles: MapStyles, fullscreenControl: false, streetViewControl: false, mapTypeControl: false}}
        >
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    )
}

const GMaps = withScriptjs(withGoogleMap(MyMap))

export default GMaps
