var mapboxgl = require('mapbox-gl');
var MapboxDirections = require('@mapbox/mapbox-gl-directions');

exports.getRoute = function(req, res, next) {
    console.log("Hello world!")
    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1Ijoic2FicmluYXNuaWRlciIsImEiOiJjazcxMmZka2IwMmo5M2ZtbDk1MTNmN2RuIn0.ZiKxC8PTY8_1lADPLzCvkw',
        unit: 'metric',
        profile: 'mapbox/cycling'
    });
    console.log(directions)

    req.directions = directions
    next();
};  
