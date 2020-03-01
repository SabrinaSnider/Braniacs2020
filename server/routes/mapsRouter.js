const getDir = require('../controllers/mapController.js');
const config = require('../config/config.js');
const express = require('express');
const mapController = require('../controllers/mapController')

const mapsRouter = express.Router();

mapsRouter.get('/token', (req, res) => {
    console.log("Triggered Get response", config.google.api_key)
    res.send(config.google.api_key)
});

mapsRouter.post('/', mapController.getRoute, (req, res) => {
    res.send(req.results);
});

module.exports = mapsRouter