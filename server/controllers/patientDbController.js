   
const patient = require('../models/patient.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')
const signToken = require('../authHelperFunctions').signToken
const ObjectId = require('mongodb').ObjectID;
const async = require('async')
const nodemailer = require('nodemailer')
const crypto = require('crypto')

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

exports.forgot = function(req, res){
    res.send('forgot');
}

exports.forgotP = function(req, res, next){
    async.waterfall([
        function(done) {
          crypto.randomBytes(20, function(err, buf) {
            var token = buf.toString('hex');
            done(err, token);
          });
        },
        function(token, done) {
          patient.findOne({ email: req.body.email }, function(err, user) {
            if (!user) {
              console.log('No account with that email address exists.')
              // req.flash('error', 'No account with that email address exists.');
              return res.redirect('/forgot');
            }
    
            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    
            user.save(function(err) {
              done(err, token, user);
            });
          });
        },
        function(token, user, done) {
          var smtpTransport = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
              user: 'patientpassreset@gmail.com',
              pass: 'patient0123' //process.env.GMAILPW
            }
          });
          var mailOptions = {
            to: user.email,
            from: 'patientpassreset@gmail.com',
            subject: 'Node.js Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              'http://' + req.headers.host + '/reset/' + token + '\n\n' +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n'
          };
          smtpTransport.sendMail(mailOptions, function(err) {
            console.log('mail sent');
            console.log('An e-mail has been sent to ' + user.email + ' with further instructions.')
            // req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
            done(err, 'done');
          });
        }
      ], function(err) {
        if (err) return next(err);
        res.redirect('/forgot');
      });
};

exports.validateReset = function(req, res){
  console.log('validate', req.body.token)
    patient.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          // req.flash('error', 'Password reset token is invalid or has expired.');
          console.log('Password reset token is invalid or has expired.')
          return res.redirect('/forgot');
        }
        console.log('all good')
        res.send({validated: true});
      });
};

exports.reset = function(req, res){
  console.log('reset')
    async.waterfall([
        function(done) {
          patient.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
            if (!user) {
              // req.flash('error', 'Password reset token is invalid or has expired.');
              console.log('Password reset token is invalid or has expired.')
              return res.redirect('/Home');
            }
            if(req.body.password === req.body.confirm) {
              // user.setPassword(req.body.password, function(err) {
              //   user.resetPasswordToken = undefined;
              //   user.resetPasswordExpires = undefined;
    
              //   user.save(function(err) {
              //     req.logIn(user, function(err) {
                    done(err, user);
              //     });
              //   });
              // })
              console.log('yay1')
            } else {
                // req.flash("error", "Passwords do not match.");
                console.log('Passwords do not match.')
                return res.redirect('back');
            }
          });
        },
        function(user, done) {
          console.log('pre-email')
          var smtpTransport = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
              user: 'patientpassreset@gmail.com',
              pass: 'patient0123' //process.env.GMAILPW
            }
          });
          console.log('pre-email2')
          var mailOptions = {
            to: user.email,
            from: 'patientpassreset@gmail.com',
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' +
              'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
          };
          console.log('pre-email3')
          smtpTransport.sendMail(mailOptions, function(err) {
            // req.flash('success', 'Success! Your password has been changed.');
            console.log('Success! Your password has been changed.')
            done(err);
          });
        }
      ], function(err) {
        res.redirect('/Home');
      });
};


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
                dob: usr.dob,
                password: usr.password
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
            name: {
                first: req.body.name.first,
                last: req.body.name.last
            },

            email: req.body.email,
            password: req.body.password
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
