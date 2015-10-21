angular.module("app").controller('cadastroCtrl', function($scope,$http,$rootScope,localStorageService){ 
    
    $scope.addArtesao = function(artesao){
      $http.post("http://192.168.1.4:8080/portifolio/cadastro/save", artesao);
    };

	$scope.addArtesanato = function(artesanatos) {
		$http.post("http://192.168.1.4:8080/portifolio/artesanato/salvar", artesanatos);
	};
});