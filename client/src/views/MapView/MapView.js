import React from 'react';
import SearchableMap from '../../components/Map/SearchableMap';
import GMaps from '../../components/GoogleMaps/GMaps'

function MapView() {
    return (
        <div className="App">
            <GMaps/>
        </div>
    );
}

export default MapView;
