const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema ({
	slot_time: String,
	slot_date: String,
	created_at: Date
});
module.exports = mongoose.model('Slot',slotSchema);

const apptSchema = new mongoose.Schema({
	patientId: {type: Number, get: i => Math.round(i), set: i => Math.round(i)},
	reminder: Boolean,
	startTime: Date,
	endTime: Date,
	name: String,
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
module.exports = mongoose.model('apptDB', apptSchema);