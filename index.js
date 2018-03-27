var express = require('express');
var router = express.Router();

function saveNode (req, res) {
	if (!req.body.name) {
		return res.status(400).send();
	}

	console.log('node name:', req.body.name);
	res.status(201).send();
};

router.post('/',
	saveNode
);

module.exports = router;
