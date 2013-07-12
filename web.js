var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

App.get('/', function(request, response) {
	var content = fs.readFileSync('index.html','utf8');

	var buffer = new Buffer(content,'utf8');

	var bufferContent = buffer.toString('utf8');

	response.send(bufferContent);
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log("Listening on " + port);
});
