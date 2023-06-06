const http = require('http');
const url = require('url');

let oldRolls = [];

const server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	console.log(parsedUrl.host);
	console.log(parsedUrl.pathname);
	console.log(parsedUrl.query);
	if (req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("Roll Initiative!");
		res.end();
	}
	if (parsedUrl.pathname === '/roll'){
		res.writeHead(200, {
			'Content-Type': 'text/plain', 
			'Access-Control-Allow-Origin': 'http://localhost:8000'
		});
		let characterName = parsedUrl.query.characterName;
		let playerId = parsedUrl.query.playerId;
		let initiativeModifier = parseInt(parsedUrl.query.initiativeModifier);
		let diceRoll = `${characterName}: ${Math.floor(Math.random() * 20 + 1) + initiativeModifier}`;
		oldRolls.push(diceRoll);
		res.write(diceRoll.toString());
		res.end();
	}
	if (req.url === '/rolls_history'){
		res.writeHead(200, {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:8000'
		});
		res.write(JSON.stringify(oldRolls));
		res.end()
	}

});

server.on('connection', function (socket) {
	console.log('New connection');
	console.log(oldRolls);
});

server.listen(3000);

console.log('Listening on port 3000...');
