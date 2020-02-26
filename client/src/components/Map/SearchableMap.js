import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

const token = 'pk.eyJ1Ijoic2FicmluYXNuaWRlciIsImEiOiJjazcxMmZka2IwMmo5M2ZtbDk1MTNmN2RuIn0.ZiKxC8PTY8_1lADPLzCvkw'

// for Geolocate button
const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

class SearchableMap extends Component {
  state = { 
    viewport :{
      latitude: 0,
      longitude: 0,
      zoom: 1
    },
    searchResultLayer: null
  }

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    })
  }

    render(){
      const { viewport, searchResultLayer} = this.state
      return (
        <div style={{ height: '100vh'}}>
            {/* 
            A ref is created to integrate the map components, and is passed to both components as a mapRef prop
            */}
            <MapGL 
                ref={this.mapRef}
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                width="100%"
                height="90%"
                onViewportChange={this.handleViewportChange}
                mapboxApiAccessToken={token}
            >
                <Geocoder // a search component that returns the coordinates of a given location from the Mapbox API
                    /* 
                    onResult is a function that is called when a result parameter is returned from the search; it
                    creates a GeoJsonLayer object and places it in state as searchResultLayer. This GeoJsonLayer is 
                    used to create a deck-gl layer over the map indicating the location searched for in the map.
                    */
                    mapRef={this.mapRef}
                    onResult={this.handleOnResult}
                    onViewportChange={this.handleGeocoderViewportChange}
                    mapboxApiAccessToken={token}
                    position='top-left'
                />
            </MapGL>
        </div>
      )
    }
}

export default SearchableMap;