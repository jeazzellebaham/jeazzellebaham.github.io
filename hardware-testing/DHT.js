var sensorLib = require('node-dht-sensor');
sensorLib.initialize(22, /*which GPIO pin it should connect to. Here, you need to figure out which GPIO number goes there. Remember, even though the signal prong should be connected to Pin 11 on your Pi, that is not the Pin's GPIO number. You need to look it up on the diagram to figure it out.*/); 

function read () {
    
}