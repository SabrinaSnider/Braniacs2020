import React, {useState} from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const AutocompleteSearch = () => {
    const [address, setAddress] = useState("")

    const handleSelect = async (value) => {

    }

    return (
        <div>
            <PlacesAutocomplete 
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (<div>heyyyy</div>)}
            </PlacesAutocomplete>
        </div>
    )
}
export default AutocompleteSearch