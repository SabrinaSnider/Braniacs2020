const jwt = require('jsonwebtoken'),
    Patient = require('./models/patient.model.js'),
    jwt_secret = '3d9944070b45ad3913e2f4a2107678525a93545eb56ce70bcb4fbf078979fbdb';

// function to create tokens
async function signToken(user) {
    const userData = user.toObject();
    delete userData.password;
    return jwt.sign(userData, jwt_secret)
}

// function to verify tokens
function verifyToken(req, res, next) {
    const token = req.get('token') || req.body.token || req.query.token;

    // reject user if no token
    if(!token) return res.json({success: false, message: "No token provided"});

    // try to verify token
    jwt.verify(token, jwt_secret, (err, decodedData) => {
        // error check
        if(err) return res.json({success: false, message: "Error with token"});

        // find user associated with token
        Patient.findById(decodedData._id, (err, user) => {
            // reject token if no user
            if(!user) return res.json({success: false, message: "Error with token"});

            req.user = user;
            next();
        })
    })
}

module.exports = {
    signToken,
    verifyToken
};