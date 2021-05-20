var sensorLib = require('node-dht-sensor');

sensorLib.initialize(22, 17 /*which GPIO pin it should connect to. Here, you need to figure out which GPIO number goes there. Remember, even though the signal prong should be connected to Pin 11 on your Pi, that is not the Pin's GPIO number. You need to look it up on the diagram to figure it out.*/); 

var interval = setInterval (read, 2000)

function read () {
    var readout = sensorLib.read();
    console.log(readout);
    console.log('Temperature: ' + readout.temperature.toFixed(2) + 'c, ' + 'humidity: ' + readout.humidity.toFixed(2) + '%');
}

ProcessingInstruction.on('SIGINT', function() {
    clearInterval(interval);
    console.log('Adios');
    ProcessingInstruction.exit();
});