const patient = require('../models/patient.model.js')
const appt = require('../models/appt.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')
const rem = require('../models/rem.model.js')


/*
USING fetchRem:
Make a get request with "clinicId" added to the request.
*/
exports.fetchRem = function(req, res){

	rem.findOne({ 'patientId' : req}, function(err, data){
		if (err) res.status(200).send("NaN");
		else res.status(200).json({
            patientId: usra.patientId,
            phone: usra.phoneNum, 
            timeStamp: usra.timeStamp, 
            reminderMessage: reminderMessage.message,
            messageId: usra.messageId, 
			name: usra.name
		})
	})
}


exports.listRem = function (req, res) {
    /* Add your code. Make sure to send the documents as a JSON response.*/
    rem.find({}, function(err, obj) {
      if (err) {
		if (err) res.status(200).send("NaN");
      } else {
		res.json(obj);
		console.log(obj)
      }
    }); 

};

exports.newRem = async (req, res) => {
    console.log("in rem controller!");
    rem.create({
        phone: req.body.phone,  
        name: req.body.name, 
        timeStamp: req.body.timeStamp, 
        patientId: req.body.patientId,
        messageId: req.body.messageId,
        reminderMessage: req.body.reminderMessage }, function(err, pt){
		res.status(200).send("Success");
	});
}

exports.deleteRem = function(req, res){
	rem.deleteOne({ 'patientId' : req.body.patientId}, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful remove");
	})
}

exports.deleteAllRem = function(req, res){
	rem.remove({ }, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful remove");
	})
}