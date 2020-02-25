const config = require('../config/config.js');
const request = require('request');

exports.getRoute = function(req, res, next) {
    // The below code makes a GET request to the specified URL.
    console.log("Getting API response...")
    
    console.log("Request to ", 'https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=' + config.mapbox.api_key)
    
    let start = [-122.662323, 45.523751];
    let end = [-84.512023, 39.102779]

    request({
        url: 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + config.mapbox.api_key
    }, async (error, response, body) => {
        if (error) throw error;
        console.log("Response is", JSON.parse(body))
        req.results = JSON.parse(body)
        next();
    });
};
