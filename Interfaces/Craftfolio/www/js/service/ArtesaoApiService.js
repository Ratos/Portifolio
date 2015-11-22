angular.module("app").factory("artesaoApi", function ($http, configUrl) {
	

	urlAlterar= "/Portifolio/artesao/alterar";
	urlGetArtesao= "/Portifolio/artesao/getArtesao?idArtesao=";
	urlUploadAvatar= "/Portifolio/artesao/avatarUpload";

	var _alteraArtesao = function(artesao,imgPerfil){

		return $http.post(configUrl.baseUrl+urlAlterar,artesao,imgPerfil);
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