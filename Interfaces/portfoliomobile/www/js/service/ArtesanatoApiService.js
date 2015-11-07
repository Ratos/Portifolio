angular.module("app").factory("artesanatoApi", function ($http, configUrl) {
	

	urlSalvar = "/Portifolio/artesanato/salvar";
	urlListar = "/Portifolio/artesanato/listar";

	var _saveArtesanato = function (artesanato) {
		return $http.post(configUrl.baseUrl+urlSalvar, artesanato);
	};

	var _listArtesanatos = function(){
		return $http.get(configUrl.baseUrl+urlListar);
	};

	return {
		saveArtesanato: _saveArtesanato,
		listArtesanatos: _listArtesanatos
	};
});