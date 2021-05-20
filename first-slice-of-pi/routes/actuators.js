var express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

// put in routes for '/' and '/leds' //

router.route('/leds/:id').get(function (req, res, next) {
	res.send(resources.pi.actuator.leds[req.params.id]);
});
	

module.exports = router;
