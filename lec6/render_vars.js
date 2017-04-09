var http = require("http"),
	fs = require("fs");

http.createServer(function(req,res){

	if (req.url.indexOf("favicon.ico")>0) {return;}

	fs.readFile("./index.html",function(err,data){
		var html_string = data.toString();
		var expresion = /[^\{\}]+(?=\})/g;
		var variables = html_string.match(expresion);
		var arreglo_parametros = [];
		var parametros = {};

		if (req.url.indexOf("?")>0)
		{
			var url_data = req.url.split("?");
			var arreglo_parametros = url_data[1].split("&");
		}

		for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
			var parametro = arreglo_parametros[i].split("=");
			parametros[parametro[0]] = parametro[1];
		}
		for (var i = variables.length - 1; i >= 0; i--) {
			var value = parametros[variables[i]];
			html_string = html_string.replace("{"+variables[i]+"}",value);
		}

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	})
}).listen(8082);