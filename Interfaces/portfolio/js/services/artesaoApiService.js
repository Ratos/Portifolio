angular.module("site").factory("artesaoApi", function($http, configUrl) {

	urlGetArtesoes = "/Portifolio/artesao/artesoes";

	var _getArtesoes = function() {
		return $http.get(configUrl.baseUrl+urlGetArtesoes);
	};

	return {

	getArtesoes: _getArtesoes
	};
});