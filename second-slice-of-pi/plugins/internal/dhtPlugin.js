var resources = require('./../../resources/model');
var sensorDriver = require('node-dht-sensor');

var interval, sensor;
var device = resources.pi.sensors.dht;
var localParams = {'frequency': 2000};

function connectHardware () {
    sensor = {
        'initialize': function () {
            sensorDriver.initialize(device.model, device.gpio);
        },
        'read': function () {
            /* updates the device model w/ current sensor values*/
            // save the result of reading the senor values in var readout//
            var readout = "result of reading the sensor values";
            sensorDriver.read();
        }

    };
}