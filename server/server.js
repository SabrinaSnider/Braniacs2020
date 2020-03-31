const express = require('express')
const config = require('./config/config.js')
const mapsRouter = require('./routes/mapsRouter')
const patientDbRouter = require('./routes/patientDbRouter')
const apptDbRouter = require('./routes/apptDbRouter')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
 
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});
 
// Use env port or default
const port = process.env.PORT || 5000;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const app = express();
// enable request logging for development debugging
app.use(morgan('dev'));
// body parsing middleware
app.use(bodyParser.json());

app.use('/maps', mapsRouter)
app.use('/patient', patientDbRouter)
app.use('/appt', apptDbRouter)

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Server now running on port ${port}!`));
