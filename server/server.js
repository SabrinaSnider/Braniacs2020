const express = require('./config/express.js')
const config = require('./config/config.js')
const mongoose = require('mongoose')

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init();

app.listen(port, () => console.log(`Server now running on port ${port}!`));
