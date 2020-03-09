// const config = require('../config/config.js');
const express = require('express');

const mapsRouter = express.Router();

// mapsRouter.get('/token', (req, res) => {
//     console.log("Triggered Get response", config.google.api_key)
//     res.send(config.google.api_key)
// });

module.exports = mapsRouter