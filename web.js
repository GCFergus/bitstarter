var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var contents = fs.readFileSync('index.html','utf8');

	var buffer = new Buffer(contents,'utf8');

	var bufferContents = buffer.ToString('utf8');



	response.send('Hello World 4!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
