angular.module("site").factory("artesaoApi", function($http, configUrl) {

	urlGetArtesoes = "/Portifolio/artesao/artesoes";
	urlGetArtesao = "/Portifolio/artesao/getArtesao?idartesao=";

	var _getArtesoes = function(){
		return $http.get(configUrl.baseUrl+urlGetArtesoes);
	};
	
	var _artesaoGet = function(idartesao){
		return $http.get(configUrl.baseUrl+urlGetArtesao+idartesao);
	};

	return {
		getArtesoes: _getArtesoes,
		artesaoGet: _artesaoGet
	};
});