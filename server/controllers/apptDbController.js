const appt = require('../models/appt.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')

/*
USING fetchAppt:
Make a get request with "clinicId" added to the request.
*/
exports.fetchAppt = function(req, res){
	appt.findOne({ 'clinicId' : req.clinicId}, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).json({
			name: usra.name,
			email: usra.email,
			phone: usra.phone,
			physician: usra.physician,
			slots: usra.slots, //reference to a slot id
			created_at: usra.created_at
		})
	})
}

/*
USING newAppt:
Make a post request with your appointment json.
*/
exports.newAppt = async (req, res) => {
	appt.create({name: req.body.name, email: req.body.email, phone: req.body.phone, physician: req.body.physician, slots: req.body.slots, created_at: req.body.created_at}, function(err, pt){
		res.status(200).send("Success");
	});
}

exports.updateAppt = function(req, res){
	appt.updateOne({ 'clinicId' : req.clinicId}, {'name' : req.name, 'email' : req.email, 'phone' : req.phone, 'physician' : req.physician, 'slots' : req.slots, 'created_at': req.created_at}, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful update");
	})
}

exports.deleteAppt = function(req, res){
	appt.deleteOne({ 'clinicId' : req.clinicId}, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful remove");
	})
}