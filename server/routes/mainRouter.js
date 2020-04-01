const express = require('express');

const mapsRouter = require('./mapsRouter')
const patientDbRouter = require('./patientDbRouter')
const apptDbRouter = require('./apptDbRouter')

const mainRouter = express.Router();

mainRouter.use('/maps', mapsRouter)
mainRouter.use('/patient', patientDbRouter)
mainRouter.use('/appt', apptDbRouter)

module.exports = mainRouter;