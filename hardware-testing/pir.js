var Gpio = require('onoff').Gpio;
var sensor = new Gpio(4, 'in', 'both');

sensor.watch(function (err, value){});

function exit(err) {
    sensor.unexport();
    process.exit();
  }

  process.on('SIGINT', exit);
