var http = require("http");

portNumber = 8888;

http.createServer(
	function(request, response) {
		message = "Hello! A new request was just received on port number:" + portNumber;
		console.log(message);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(message);
		response.end();
	}
).listen(portNumber);
