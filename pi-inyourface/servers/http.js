require('./../middleware/converter')
require('body-parser')

var sensorRoutes = require('./../routes/sensors');
var express = require('express'),
	cors = require('cors');

var app = express();

app.use(bodyParser.json());

app.use(cors());
app.use('/pi/sensors', sensorRoutes);
app.get('/', function(req, res) {
	res.send('res 4 accessing root');
});

var actuatorRoutes = require('./../routes/actuators');
app.use('/pi/sensors', sensorsRoutes);

app.use(converter());

module.exports = app;
