var express = require('express');
var fs = require('fs');

//var app = express.createServer(express.logger());
var app = express();

app.get('/', function(request, response) {

	var buf = new Buffer(fs.readFileSync('index.html'));

	response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});
