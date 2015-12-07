angular.module("site").factory("artesanatoApi", function($http, configUrl) {

	urlGetArtesanatos = "/Portifolio/artesanato/lista";
	urlGetArtesanatosCategoria = "/Portifolio/artesanato/buscarCategoria?categoria=";
	urlArtesanatoArtesao = "/Portifolio/artesanato/listaArtesanatos?idArtesao=";
	var _getArtesanatos = function() {
		return $http.get(configUrl.baseUrl+urlGetArtesanatos);
	};

	var _getArtesanatosCategoria = function(categoria) {
		return $http.get(configUrl.baseUrl+urlGetArtesanatosCategoria+categoria);
	};

	var _artesanatosArtesao = function(idArtesao) {
		return $http.get(configUrl.baseUrl+urlArtesanatoArtesao+idArtesao);
	};


	return {

	getArtesanatos: _getArtesanatos,
	getArtesanatosCategoria: _getArtesanatosCategoria,
	artesanatosArtesao: _artesanatosArtesao
	};
});