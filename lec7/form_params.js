var http = require("http"),
	fs = require("fs"),
	parser = require("./params_parse.js"),
	ren = require("./params_render.js");

var p = parser.parse000;
var r = ren.render;

http.createServer(function(req,res){

	if (req.url.indexOf("favicon.ico")>0) {return;}

	fs.readFile("./index.html",function(err,data){
		parametros = p(req);
		html_string = r(data,parametros);

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	})
}).listen(8082);