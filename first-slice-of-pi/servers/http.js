var sensorRoutes = require('./../routes/sensors');
var express = require('express'),
	cors = require('cors');

var app = express();
app.use(cors());
app.use('/pi/sensors', sensorRoutes);
app.get('/', function(req, res) {
	res.send('res 4 accessing root');
});

var actuatorRoutes = require('./../routes/actuators');

module.exports = app;
