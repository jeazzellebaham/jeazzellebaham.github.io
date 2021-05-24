var resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;

function connectHardware() {
    sensor = new Gpio(device.gpio, 'in', 'both');
    // save n sensor //
    Gpio.watch(function (err, value){
        //check for errors
        if (!err) {
            device.value = ! !value;
        }
    })
}

exports.start = function (params) {
    connectHardware();
};

exports.stop = function () {
    sensor.unexport();
};

var sensor;
var device = resources.pi.sensors.pir;

