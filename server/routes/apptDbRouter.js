const apptDb = require('../controllers/apptDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();

/*Patient Database Router*/

Router.post('/createappt', apptDb.fetchAppt); //fetch emails
Router.get('/create', apptDb.newAppt); //testing function
Router.put('/edit', apptDb.updateAppt); //fetch user information
Router.delete('/remove', apptDb.deleteAppt); //create user

//Router.put('/pwreset', patientDb.pwReset); //potential password reset function?

module.exports = Router