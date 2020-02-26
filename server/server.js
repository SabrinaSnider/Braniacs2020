const express = require('./config/express.js')
const mapController = require('./controllers/mapController.js')
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));

app.post('/maps/', mapController.getRoute, (req, res) => {
    res.send(req.results);
});
