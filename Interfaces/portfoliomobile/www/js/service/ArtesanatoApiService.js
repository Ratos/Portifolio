angular.module("app").factory("artesanatoApi", function ($http, configUrl) {
	

	urlSalvar = "/Portifolio/artesanato/salvar";
	urlListar = "/Portifolio/artesanato/listar";
	urlListArtesanatoIdArtesao = "/Portifolio/artesanato/listaArtesanatos?idArtesao=";

	var _saveArtesanato = function (artesanato) {
		return $http.post(configUrl.baseUrl+urlSalvar, artesanato);
	};

	var _listArtesanatos = function(){
		return $http.get(configUrl.baseUrl+urlListar);
	};

	var _listArtesanatoIdArtesao = function(idArtesao){
		return $http.get(configUrl.baseUrl+urlListArtesanatoIdArtesao+idArtesao);
	};

	return {
		saveArtesanato: _saveArtesanato,
		listArtesanatos: _listArtesanatos,
		listArtesanatoIdArtesao: _listArtesanatoIdArtesao
	};
});