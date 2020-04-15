const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const patientSchema = new mongoose.Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	clinicId: {type: String},
	dob: {type: Date},
	name: {
		first: {type: String},
		last: {type: String}
	},
	resetPasswordToken: {type: String},
	resetPasswordExpires: {type: Date}
});

patientSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// adds method to user to check if password is correct
patientSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// had to add this, checks if password was changed before saving
patientSchema.pre('save', function(next) {
    if(this.isModified('password')) {
        this.password = this.generateHash(this.password);
    }
    next();
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
const Patient = mongoose.model('patientDB', patientSchema)
module.exports = Patient;
