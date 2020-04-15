const express = require('express');

const mapsRouter = require('./mapsRouter')
const patientDbRouter = require('./patientDbRouter')
const apptDbRouter = require('./apptDbRouter')
const flash = require('connect-flash');

const mainRouter = express.Router();

mainRouter.use(flash());

mainRouter.use('/maps', mapsRouter)
mainRouter.use('/patient', patientDbRouter)
mainRouter.use('/appt', apptDbRouter)

module.exports = mainRouter;