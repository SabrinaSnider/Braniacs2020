const patient = require('../models/patient.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')
const signToken = require('../authHelperFunctions').signToken
const ObjectId = require('mongodb').ObjectID;

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

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
USING fetchUser:
Make a get request with "email" added to the request.
*/
exports.fetchUserFromEmail = function(req, res){
	console.log("looking for user with id", req.body._id)
	patient.findOne({ "email" : req.body.email}, function(err, usr){
		if (err) res.status(200).send("NaN");
        else {
            console.log(usr)
            res.status(200).json({
                name: {
                    first: usr.name.first,
                    last: usr.name.last
                },
                clinicId: usr.clinicId,
                email: usr.email,
				phone: usr.phone,
                dob: usr.dob,
                password: usr.password,
            })
        }
	})
}

/*
USING newPatient:
Make a post request with your patient json (first name, last name, email, and password) added to the request.
*/
exports.newPatient = async (req, res) => {
    //  console.log(req.body);
    //  patient.create({name: {first: req.body.first, last: req.body.last}, email: req.body.email, password: req.body.password}, function(err, pt){
    //      res.status(200).send("Success");
    // 	    console.log("Done");
    //  });
    try{

        const newPatient = new patient({
			patientId: Math.random().toString(36).substr(2,15),
            name: {
                first: req.body.name.first,
                last: req.body.name.last
            },
            email: req.body.email,
            password: req.body.password,
			dob: req.body.dob,
			phone: req.body.phone,
			admin: false //automatically set to false
        });

        const { errors, isValid } = await validateRegisterInput(req.body);

        if (!isValid) {
            return res.status(200).json({errors: errors});
        } 

        const token = await signToken(newPatient);
        
        let alreadyExists;
        patient.findOne({email: newPatient.email}).then(user =>{
            if (user) {
                alreadyExists = true;
                return res.status(200).json({ errors:{email: "Email already exists" }});
            } else{
                alreadyExists = false;
            }
        }).then(()=>{
            if(!alreadyExists){
                newPatient.save();
                res.json({success: true, message: "User created with token", token});
            }
        })

    } catch(err) {
        res.json({success: false, code: err.code});
    }
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
	patient.updateOne({ 'email' : req.body.email}, {name: {first: req.body.first, last: req.body.last}, email: req.body.email, password: req.body.password, dob: req.body.dob}, function(err, usr){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful update");
	})
}

exports.authenticate = async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(200).json(errors);
    }

    const user = await patient.findOne({email: req.body.email});

    if(!user){
        return res.status(200).json({ errors: {email: "Email not found" }});
    } else if(!user.validPassword(req.body.password)) {
        return res.status(200).json({ errors:{ password: "Email and password do not match. Please try again." }});
    } else {
        const token = await signToken(user);
        res.json({success: true, message: "Token attached", token});
    }
}