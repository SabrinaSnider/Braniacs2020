const patient = require('../models/patient.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')

/*
USING fetchEmails:
Make a get request with "email" added to the request.
*/
exports.fetchEmails = function(req, res){
	patient.find(null, 'email', function(err, ls){
		if (err) throw err;
		else res.status(200).send(ls);
	})
}

/*
USING fetchUser:
Make a get request with "email" added to the request.
*/
exports.fetchUser = function(req, res){
	patient.findOne({ 'email' : req.email}, function(err, usr){
		if (err) res.status(200).send("NaN");
		else res.status(200).json({
			email: usr.email,
			password: usr.password
		})
	})
}

/*
USING newPatient:
Make a post request with your patient json (first name, last name, email, and password) added to the request.
*/
exports.newPatient = async (req, res) => {
	console.log(req.body);
	patient.create({name: {first: req.body.first, last: req.body.last}, email: req.body.email, password: req.body.password}, function(err, pt){
		res.status(200).send("Success");
		console.log("Done");
	});
}

/*
USING popPatients:
Don't actually invoke this from the client! This is a testing function used to bake a database for patients!
*/
exports.popPatients = async (req, res) => {
	emailsToPop = ['vega@uac.com','kryten@jupitermining.co','123omega@gun.un','ronkataiser@dcmfpr.se','elsenova@sudra.net'];
	for (var i=0;i<emailsToPop.length;i++){
	patient.create({name: {first: "test", last:"ificate"}, email: emailsToPop[i], password: 'skeleton'}, function(err, cr){
		if (err) res.status(403).send({error: 'oh no'});
		else{
			console.log(cr);
		}
	})
	}
	res.status(200).send("DB should be populated now");
}

/*make a post request with patient json(first name, last name, email, dob, and password) added to the request to update patient info*/
exports.updatePatients = function(req, res){
	console.log("here");
	patient.updateOne({ 'clinicId' : req.clinicId}, {name: {first: req.body.first, last: req.body.last}, email: req.body.email, password: req.body.password, dob: req.body.dob}, function(err, usr){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful update");
	})
