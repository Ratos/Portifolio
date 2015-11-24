angular.module("app").factory("artesaoApi", function ($http, configUrl) {
	

	urlAlterar= "/Portifolio/artesao/alterar";
	urlGetArtesao= "/Portifolio/artesao/getArtesao?idArtesao=";
	urlUploadAvatar= "/Portifolio/artesao/avatarUpload";

	var _alteraArtesao = function(artesao,foto){

		return $http.post(configUrl.baseUrl+urlAlterar,artesao,foto);
	};

	var _getArtesao = function(idartesao){
		
		return $http.get(configUrl.baseUrl+urlGetArtesao,idartesao);
		
	};

	var _uploadAvatar = function(){

		return $http.post(configUrl.baseUrl+urlUploadAvatar);
	}

	return {
		alteraArtesao: _alteraArtesao,
		getArtesao: _getArtesao,
		uploadAvatar: _uploadAvatar
	};
});