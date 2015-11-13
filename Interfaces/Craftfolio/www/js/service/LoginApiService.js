angular.module("app").factory("loginApi", function ($http, configUrl) {

	urlLogin = "/Portifolio/artesao/logar";

	var _logar = function(login){
			return $http.post(configUrl.baseUrl+urlLogin, login);
	};
	
	return{

		logar: _logar
	};
});