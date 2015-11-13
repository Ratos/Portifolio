angular.module("app").factory("cadastroApi", function ($http, configUrl) {
	

	urlSave = "/Portifolio/cadastro/save";
	urlEmailValidation = "/Portifolio/cadastro/validar?email=";

	var _saveArtesao = function (artesao) {
		return $http.post(configUrl.baseUrl + urlSave, artesao);
	};

	var _validarEmail = function(email){
		return $http.get(configUrl.baseUrl+urlEmailValidation+email);
	};

	return {
		saveArtesao: _saveArtesao,
		validarEmail: _validarEmail

	};
});