const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	clinicId: {type: String},
	dob: {type: Date},
	name: {
		first: {type: String},
		last: {type: String}
	}
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
module.exports = mongoose.model('patientDB', patientSchema)