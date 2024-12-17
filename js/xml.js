// Obtenemos el objeto de Ajax
function XmlHTTPGet() {
	var xmlhttp;

	try {
		xmlhttp = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {
				xmlhttp = undefined;
			}
		}
	}

	return xmlhttp;
};

// Obtenemos los datos de una dirección y, al terminar llamamos a una función callback.
function XmlGetData(url, callback, xml) {
	var xmlhttp = XmlHTTPGet();

	xmlhttp.onreadystatechange = function() {
		switch (xmlhttp.readyState) {
			case 4:
				switch (xmlhttp.status) {
					case 0:
					case 200:
						if (callback) callback(xml ? xmlhttp.responseXML : xmlhttp.responseText);
					break;
					default:
						if (callback) callback(undefined);
					break;
				}
			break;
		}
	};

	xmlhttp.open('GET', url, true);
	xmlhttp.send('');
};

// Obtenemos el XML de una dirección y, al terminar llamamos a una función callback.
function XmlGetXML(url, callback, xml) {
	return XmlGetData(url, callback, true);
};
