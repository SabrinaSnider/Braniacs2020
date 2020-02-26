const getDir = require('../controllers/mapController.js');
const config = require('../config/config.js');
const express = require('express');
const mapController = require('../controllers/mapController')

const mapsRouter = express.Router();

mapsRouter.get('/', (req, res) => {
    res.send(config.mapbox.api_key)
});

mapsRouter.post('/', mapController.getRoute, (req, res) => {
    res.send(req.results);
});

module.exports = mapsRouter