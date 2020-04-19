//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
        uri: 'mongodb+srv://username:test@swe-team-cluster-mt2en.mongodb.net/test?retryWrites=true&w=majority', //place the URI of your mongo database here.
    },

    twilioAPI: {
        accountSid: 'AC484b1fa2dd409d9371b4ffb672a4311a',
        authToken: 'ffa0bdef7f16b3c0f5c6ccdba173d49b',
		from: '+12053465210',
    }
};