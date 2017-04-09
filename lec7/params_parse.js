function parse(req) {
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

	return	parametros;
}

module.exports.parse000 = parse;