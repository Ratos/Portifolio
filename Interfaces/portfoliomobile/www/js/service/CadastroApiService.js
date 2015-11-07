angular.module("app").factory("cadastroApi", function ($http, configUrl) {
	

	urlSave = "/Portifolio/cadastro/save";

	var _saveArtesao = function (artesao) {
		return $http.post(configUrl.baseUrl + urlSave, artesao);
	};

	return {
		saveArtesao: _saveArtesao
	};
});