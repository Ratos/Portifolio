angular.module("site").factory("artesanatoApi", function($http, configUrl) {

	urlGetArtesanatos = "/Portifolio/artesanato/lista";
	urlGetArtesanatosCategoria = "/Portifolio/artesanato/buscarCategoria?categoria=";

	var _getArtesanatos = function() {
		return $http.get(configUrl.baseUrl+urlGetArtesanatos);
	};

	var _getArtesanatosCategoria = function(categoria) {
		return $http.get(configUrl.baseUrl+urlGetArtesanatosCategoria+categoria);
	};

	return {

	getArtesanatos: _getArtesanatos,
	getArtesanatosCategoria: _getArtesanatosCategoria
	};
});