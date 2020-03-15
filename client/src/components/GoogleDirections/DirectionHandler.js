/*
    Gets the current location of the user using the geolocation API, then
    makes a call to getDirections to update the directions
*/
const updatePosition = async (setPosition, destination, setDirections) => {
    await navigator.geolocation.getCurrentPosition(
        position => {
            // sets the position state based on Geolocation response
            let newPosition = {
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
            }
            setPosition (newPosition)

            // updates the directions using the new position
            getDirections(newPosition, destination, setDirections)
        },
        error => {if (error) console.log(error)}   
    )
}

/*
    Makes a call to the Google Directions API to auto-generate directions from
    the origin to the destination
*/
const getDirections = (origin, destination, setDirections) => {
    if (origin == null || destination == null) return
    
    const google = window.google;
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
        origin: new google.maps.LatLng(origin.latitude, origin.longitude),
        destination: new google.maps.LatLng(destination.latitude, destination.longitude),
        travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            console.log(result)
            setDirections(result)
        } else {
            setDirections(null)
        }
    });

}

export {
    updatePosition,
    getDirections
}