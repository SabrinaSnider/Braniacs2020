import React, { useState, useEffect } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"
import MapStyles from './MapStyles'

const MyMap = (props) => {
    const google = window.google;
    const [directions, setDirections] = useState(null);

    useEffect(() => {
        // Functions passed to useEffect are executed on every component rendering
        // If values are passed to the array, useEffect will execute every time those value changes
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
            origin: new google.maps.LatLng(41.8507300, -87.6512600),
            destination: new google.maps.LatLng(41.8525800, -87.6514100),
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log('Directions are:', result)
                setDirections(result)
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }, [])

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
            defaultOptions = {{styles: MapStyles}}
        >
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    )
}

const GMaps = withScriptjs(withGoogleMap(MyMap))

export default GMaps
