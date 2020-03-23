const mongoose = require('mongoose');

const apptSchema = new mongoose.Schema({
	clinicId: {type: String},
	date: {type: Date},
	physician: {type: String}
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
module.exports = mongoose.model('apptDB', apptSchema);