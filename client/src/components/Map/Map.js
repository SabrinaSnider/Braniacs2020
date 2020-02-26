import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const token = ''

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 100 })
  
  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      {/* Initiate the map using the MapGL component */}
      <MapGL
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange} // function that we use to update the viewport; made above
      >
        {/* GeolocateControl allows us to track the user’s location through the browser */}
        <GeolocateControl
          style={geolocateStyle} // styling that determines the size and placement of the button that triggers the geolocation service
          positionOptions={{enableHighAccuracy: true}} // object containing the options passed to the Geolocation API
          trackUserLocation={true} // makes the button monitor and update the user’s location when it changes
        />
      </MapGL>
    </div>
  )
}

export default Map