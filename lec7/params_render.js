function renderAlgo(data,parametros) {
	var html_string = data.toString();
	var expresion = /[^\{\}]+(?=\})/g;
	var variables = html_string.match(expresion);

	for (var i = variables.length - 1; i >= 0; i--) {
		var value = parametros[variables[i]];
		html_string = html_string.replace("{"+variables[i]+"}",value);
	}
	return html_string;
}

module.exports.render = renderAlgo;