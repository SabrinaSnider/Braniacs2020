const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema ({
	slot_time: String,
	slot_date: String,
	created_at: Date
});
module.exports = mongoose.model('Slot',slotSchema);

const apptSchema = new mongoose.Schema({
	clinicId: {type: String},
	name: String,
	email: String,
	phone: Number,
	physician: {type: String},
	slots: mongoose.Schema.Types.ObjectId,
	created_at: Date
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
module.exports = mongoose.model('apptDB', apptSchema);