var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('templates'));
app.use(require('./index.js'));

app.listen(process.env.PORT || 5000, function () {
	console.log('Lumos tree')
});