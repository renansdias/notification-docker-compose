var express = require('express');
var app = express();
var port = 8999;

app.get('/', function(req, res) {
	console.log('Notification received!');
});

app.listen(port, function() {
	console.log('App running on port ' + port);
});