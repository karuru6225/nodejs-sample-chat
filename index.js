var http = require('http');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);
console.log('running...');

function doRequest(req, res){
	console.log('recieve reqest');
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello, Nodejs World');
	res.end();
}

