const http = require('http');

const server = http.createServer(function (req, res) {
	if (req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("Roll Initiative!");
		res.end();
	}
	if (req.url === '/roll'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		let diceRoll = Math.ceil(Math.random() * 20);
		res.write(diceRoll.toString());
		res.end();
	}
});

server.on('connection', function (socket) {
	console.log('New connection');
});

server.listen(3000);

console.log('Listening on port 3000...');
