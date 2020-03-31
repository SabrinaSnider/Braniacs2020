const patientDb = require('../controllers/patientDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')
verifyToken = require('../authHelperFunctions').verifyToken;

const Router = express.Router();

/*Patient Database Router*/

Router.get('/emails', patientDb.fetchEmails); //fetch emails
// Router.get('/create', patientDb.popPatients); //testing function
Router.get('user', patientDb.fetchUser); //fetch user information

Router.post('/register', patientDb.newPatient); //create user



//Router.put('/pwreset', patientDb.pwReset); //potential password reset function?


Router.post('/authenticate', patientDb.authenticate);

Router.use(verifyToken);


module.exports = Router