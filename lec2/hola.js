var http = require("http");

var manejador = function(req,res) {
	console.log("Hola mundo!");
	res.end("Hola Mundo");
}
var server = http.createServer(manejador);
server.listen(8082);