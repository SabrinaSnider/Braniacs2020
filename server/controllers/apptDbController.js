const patient = require('../models/appt.model.js')
const appt = require('../models/appt.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')

/*
USING fetchAppt:
Make a get request with "clinicId" added to the request.
*/
exports.fetchAppt = function(req, res){
	appt.findOne({ 'patientId' : req.patientId}, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).json({
			patientId: usra.patientId,
			reminder: usra.reminder,
			startTime: usra.startTime,
			endTime: usra.endTime,
			name: usra.name
		})
	})
}


exports.listAppt = function (req, res) {
    /* Add your code. Make sure to send the documents as a JSON response.*/
    appt.find({}, function(err, obj) {
      if (err) {
		if (err) res.status(200).send("NaN");
      } else {
        res.json(obj);
      }
    }); 

};

/*
USING newAppt:
Make a post request with your appointment json.
*/
exports.newAppt = async (req, res) => {
	appt.create({patientId: req.body.patientId, reminder: req.body.reminder, startTime: req.body.startTime, endTime: req.body.endTime, name: req.body.name}, function(err, pt){
		res.status(200).send("Success");
	});
}

exports.updateAppt = function(req, res){
	appt.updateOne({ 'patientId' : req.patientId}, {'name' : req.name, 'reminder' : req.reminder, 'startTime' : req.startTime, 'endTime' : req.endTime}, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful update");
	})
}


exports.deleteAppt = function(req, res){
	appt.deleteOne({ 'patientId' : req.body.patientId}, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful remove");
	})
}