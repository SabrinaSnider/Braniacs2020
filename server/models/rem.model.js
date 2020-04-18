const mongoose = require('mongoose');


const remSchema = new mongoose.Schema({
    phone: String, 
	name: String, 
    timeStamp: String, 
    patientId: {type: Number, get: i => Math.round(i), set: i => Math.round(i)},
    reminderMessage: String, 
    messageId: String
});

module.exports = mongoose.model('remDB', remSchema);