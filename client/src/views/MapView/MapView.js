import React from 'react';
import SearchableMap from '../../components/Map/SearchableMap';
import GMaps from '../../components/GoogleMaps/GMaps'

let token = ''

// let origin = [41.8507300, -87.6512600]
// let destination = [41.8525800, -87.6514100]

function MapView() {
    return (
        <div className="App" style = {{width: `80vw`, height: `80vh`, margin: '0 auto'}}>
            <GMaps
                googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + token}
                loadingElement = {<div style = {{height: '100%'}}/>}
                containerElement = {<div style = {{height: '100%'}}/>}
                mapElement = {<div style = {{height: '100%'}}/>}
                // origin = {origin}
                // destination = {destination}
            />
        </div>
    );
}

export default MapView;
