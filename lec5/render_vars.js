var http = require("http"),
	fs = require("fs");

http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,data){
		var html_string = data.toString();
		var nombre = "codigo facilito";
		var expresionRegular = /[^\{\}]+(?=\})/g;
		var variables = html_string.match(expresionRegular);

		// variables['nombre']
		for (var i = variables.length - 1; i >= 0; i--) {
			// lo ejecutamos como codigo de javascript
			var value = eval(variables[i]);
			// reemplazar el contenido con llaves
			html_string = html_string.replace("{"+variables[i]+"}",value)
		}

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	})
}).listen(8082);