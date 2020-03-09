// gets the current geolocation of the user
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

// method to grab list of directions from google api
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