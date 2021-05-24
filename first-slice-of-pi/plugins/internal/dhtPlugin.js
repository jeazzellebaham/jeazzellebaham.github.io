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
            var readout = sensorDriver.read();
            /* updates the device model w/ current sensor values*/
            // save the result of reading the senor values in var readout//
            device.temperature.value = parseFloat(readout.temperature);
            device.humidity.value = parseFloat(readout.temperature);
        }
    };
    sensor.initialize();
    sensor.read();

    interval = setInterval (function () {
        sensor.read();
    }, localParams.frequency);
}

exports.start = function (params) {
    localParams = params ? params : localParams;
    connectHardware();
}

exports.stop = function () {
    clearInterval();
}