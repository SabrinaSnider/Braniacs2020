const remDb = require('../controllers/remDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();

console.log("in rem router");

Router.get('/list', remDb.listRem); //list them all
Router.get('/fetch', remDb.fetchRem); //fetch emails
Router.post('/create', remDb.newRem); //testing function
Router.delete('/remove', remDb.deleteRem); //create user
Router.delete('/removeAll', remDb.deleteAllRem); //create user


module.exports = Router