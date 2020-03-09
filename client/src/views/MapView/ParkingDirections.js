import React, { useState, useEffect } from 'react'
import GMaps from '../../components/GoogleMaps/GMaps'
import Directions from '../../components/GoogleMaps/Directions'
import { updatePosition, getDirections } from '../../components/GoogleMaps/DirectionHandler'

let destination = {
    latitude: 29.640730,
    longitude: -82.341597
}

const ParkingDirections = () => {
    const [directions, setDirections] = useState(null);
    const [position, setPosition] = useState(null);

    // Functions passed to useEffect are executed on every component rendering
    // If values are passed to the array, useEffect will execute every time those value changes
    useEffect(() => {
        updatePosition(setPosition, destination, setDirections)
    }, [])

    return (
        <div className="App" style={{'backgroundColor': 'white'}}>
            <div id="directions-parking-container" style={{display:'flex', 'flexDirection': 'row', 'justifyContent': 'center'}}>
                <div style = {{float: 'left', padding: '30px', width: '50%'}}>
                    <h2>Parking Lot Navigation</h2>
                    <Directions
                        directions = {directions}
                    />
                </div>
                <div style = {{width: `40vw`, padding: '30px', height: `60vh`, float: 'right'}}>
                    <GMaps
                        loadingElement = {<div style = {{height: '100%'}}/>}
                        containerElement = {<div style = {{height: '100%'}}/>}
                        mapElement = {<div style = {{height: '100%'}}/>}
                        directions = {directions}
                    />
                </div>
            </div>
            <div style = {{float: 'left', margin: '30px', width: '45vw'}}>
                <h2>Parking information</h2>
                <p style={{'textAlign': 'left'}}>
                    <li>
                        Valet parking is available in the front circle of the hospital ($3 with a patient 
                        or patient visitor parking voucher). Patients and visitors must ask for a parking 
                        voucher at the check-out area, nurses’ station or other designated area when leaving 
                        their location of service and present it to the attendant upon exiting the garage. 
                        Please be advised that parking is cash only.
                    </li>
                    <li>
                        If patients or visitors do not wish to valet, a 600-space parking garage is available 
                        adjacent to the hospital. A covered walkway from the garage leads into the lobby of 
                        the building.
                    </li>
                </p>
            </div>
        </div>
    )
}

export default ParkingDirections;
