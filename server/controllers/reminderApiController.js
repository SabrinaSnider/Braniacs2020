const config = require('../config/config.js')
const twilio = require('twilio');
const client = twilio(config.twilioAPI.accountSid, config.twilioAPI.authToken);

exports.newApiReminder = async (req, res) => {
	let body = req.body.reminderMessage;
	console.log(body);
	let to = req.body.phone;
	console.log(to);
	client.messages.create ({
		body,
		from: config.twilioAPI.from, //uncomment to implement actual sending. 
		//from: '',
		to
	}, function(err, message) {
		if (err) {
			console.error('Text failed because: '+ err.message);
		} else {
			console.log('Text sent! Message SID: '+message.sid);
			res.json(message);
		}
	});
}

  