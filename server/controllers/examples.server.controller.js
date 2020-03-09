const Example = require('../models/examples.server.model.js')
const axios = require('axios')

exports.hello = function(req, res) {
    // axios.get('').then(()=>{
        // res.send(data['accesstpoken'])
    // })
    res.send('world')
};