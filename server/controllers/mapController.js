const config = require('../config/config.js');
const request = require('request');

exports.getRoute = function(req, res, next) {
    // The below code makes a GET request to the specified URL.
    console.log("Getting API response...")

    request({
        url: 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + req.body.start[0] + ',' + req.body.start[1] + ';' + req.body.end[0] + ',' + req.body.end[1] + '?geometries=geojson&access_token=' + config.mapbox.api_key
    }, async (error, response, body) => {
        if (error) throw error;
        console.log("Response is", JSON.parse(body))
        req.duration = JSON.parse(body).routes[0].duration // send duration
        next();
    });
};
