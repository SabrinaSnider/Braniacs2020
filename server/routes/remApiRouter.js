const remApi = require('../controllers/reminderApiController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();

console.log("in api router");


Router.post('/send', remApi.newApiReminder); //testing function


module.exports = Router