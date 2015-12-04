angular.module("app").factory("artesanatoApi", function ($http, configUrl) {
	

	urlSalvar = "/Portifolio/artesanato/salvar";
	urlListar = "/Portifolio/artesanato/listar";
	urlListArtesanatoIdArtesao = "/Portifolio/artesanato/listaArtesanatos?idArtesao=";
	urlRemoveArtesanato = "/Portifolio/artesanato/remover";
	urlAlterarArtesanato = "/Portifolio/artesanato/alteraArtesanato";
	urlFoto = "/Portifolio/artesanato/foto?foto="

	var _saveArtesanato = function (artesanato, foto) {
		return $http.post(configUrl.baseUrl+urlSalvar, artesanato, foto);
	};

	var _listArtesanatos = function(){
		return $http.get(configUrl.baseUrl+urlListar);
	};
	var _getFoto = function(foto){
		return $http.get(configUrl.baseUrl+urlFoto+foto);
	};
	var _listArtesanatoIdArtesao = function(idArtesao){
		return $http.get(configUrl.baseUrl+urlListArtesanatoIdArtesao+idArtesao);
	};

	var _removeArtesanato = function(artesanato){

		return $http.post(configUrl.baseUrl+urlRemoveArtesanato,artesanato);
	};

	var _alteraArtesanato = function(artesanato){

		return $http.post(configUrl.baseUrl+urlAlterarArtesanato,artesanato);
	};

	return {
		saveArtesanato: _saveArtesanato,
		listArtesanatos: _listArtesanatos,
		listArtesanatoIdArtesao: _listArtesanatoIdArtesao,
		alteraArtesanato: _alteraArtesanato,
		removeArtesanato: _removeArtesanato,
		getFoto: _getFoto
	};
});