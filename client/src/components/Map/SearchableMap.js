import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import MapGL, {GeolocateControl} from 'react-map-gl'
import Geocoder from "react-map-gl-geocoder";
import axios from 'axios'
import './SearchableMap.css';
import DeckGL, { GeoJsonLayer } from "deck.gl";
import {LineLayer} from '@deck.gl/layers';
import PolylineOverlay from "./PolylineOverlay"

const token = 'pk.eyJ1Ijoic2FicmluYXNuaWRlciIsImEiOiJjazcxMmZka2IwMmo5M2ZtbDk1MTNmN2RuIn0.ZiKxC8PTY8_1lADPLzCvkw'
const points = [[-84.518509,39.134135],[-84.518432,39.133835],[-84.519144,39.13352],[-84.520228,39.133649],[-84.520733,39.128594],[-84.521212,39.127956],[-84.521548,39.124838],[-84.520706,39.124792],[-84.52094,39.122783],[-84.52022,39.122713],[-84.520768,39.120841],[-84.519639,39.120268],[-84.513743,39.115317],[-84.514554,39.114744],[-84.514307,39.114531],[-84.514551,39.114249],[-84.511692,39.102682],[-84.511987,39.102638]]

class SearchableMap extends Component {
    constructor(props) {
        super(props)
        this.api_token = this.getToken().then(() => {
            this.token_recieved = true
        })
    }

    getToken = async () => {
        try {
            const res = await axios.get('/maps')
            // .then(
            //     (error, response, body) => { 
            //         response.send(body) 
            // })
            const key = res.data
            console.log(`GET: Here's the response key`, key);
            return key;
        } catch (e) {
            console.error(e);
        }
    };

    state = { 
        viewport :{
            longitude: points[0][0],
            latitude: points[0][1],
            zoom: 13,
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

    render() {
      const { viewport, searchResultLayer} = this.state
      const layers = [
        new LineLayer({id: 'line-layer', points})
      ];
      console.log("tokens:", this.api_token);
      return (
        <div id="map-wrapper">
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
                <PolylineOverlay points={points} />
                <Geocoder // a search component that returns the coordinates of a given location from the Mapbox API
                    /* 
                    onResult is a function that is called when a result parameter is returned from the search; it
                    creates a GeoJsonLayer object and places it in state as searchResultLayer
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