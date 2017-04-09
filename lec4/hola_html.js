var http = require("http"),	
	fs = require("fs");

http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,data){
		res.writeHead(200, {'Content-Type': 'text/json' });
		res.write(JSON.stringify({nombre: "Abel",username: "alima"}));
		// res.write(data);
		res.end();
		// res.write(data);
		// res.end();
		// for (var i = 20; i >= 0; i--) {
		// 	res.write(i+"\n");
		// }

	})
}).listen(8082);