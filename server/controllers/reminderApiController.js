
const config = require('../config/config.js')
const accountSid = 'AC484b1fa2dd409d9371b4ffb672a4311a';
const authToken = 'ffa0bdef7f16b3c0f5c6ccdba173d49b';
const twilio = require('twilio');
const client = twilio(accountSid, authToken);

exports.newApiReminder = async (req, res) => {
	let body = req.body.reminderMessage;
	console.log(body);
	let to = req.body.phone;
	console.log(to);
	client.messages.create ({
		body,
		//from: '+12053465210', //uncomment to implement actual sending. 
		from: '',
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

  