var resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;

function connectHardware() {
    new Gpio(device.gpio, 'in', 'both');
    // save n sensor //
}

exports.start = function (params) {
    connectHardware();
};

exports.stop = function () {
    sensor.unexport();
};

var sensor;
var device = resources.pi.sensors.pir;

