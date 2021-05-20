var express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

// put in routes for '/' and '/leds' //

router.route('/leds/:id').get(function (req, res, next) {
	req.result = resources.pi.sensors;
	next();
});
	

module.exports = router;
