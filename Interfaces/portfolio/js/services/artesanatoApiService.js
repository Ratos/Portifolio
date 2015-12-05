angular.module("site").factory("artesanatoApi", function($http, configUrl) {

	urlGetArtesanatos = "/Portifolio/artesanato/lista";

	var _getArtesanatos = function() {
		return $http.get(configUrl.baseUrl+urlGetArtesanatos);
	};

	return {

	getArtesanatos: _getArtesanatos
	};
});