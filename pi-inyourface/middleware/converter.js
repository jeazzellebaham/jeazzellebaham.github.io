var json2html = require('node-json2html');

let transform = {
	'<>': 'div',
	'html': [
	    {'<>': 'p', 'html': [
			{'<>': 'b', 'html': 'Propert1: '},
			{'<>': 'p', 'html': '${property1}'}
		  ]
		}, 
		{'<>': 'p', 'html': [
			{'<>': 'b', 'html': 'Propert2: '},
			{'<>': 'p', 'html': '${property2}'}
		  ]
		},
		{'<>': 'p', 'html': [
			{'<>': 'b', 'html': 'Propert3: '},
			{'<>': 'p', 'html': '${property3}'}
		  ]
		},	
	]
};

res.send();

json2html.transformation(json.result, transform);

module.exports = function() {
	return function (req, res, next) {
		// TODO 2: Create the converter function
		if (req.result) {
			res.send(req.result);
		}
		else if (!req.result) {
			next();
		}
	};
};
