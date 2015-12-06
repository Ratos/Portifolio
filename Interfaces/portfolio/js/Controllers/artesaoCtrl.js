angular.module('site').controller('artesaoCtrl', function($scope,artesaoApi,artesanatoApi,$location,$rootScope,configUrl){
	
	$scope.listAll = function(){

		artesaoApi.getArtesoes().success(function(data,status){
			console.log("Lista de Artesões");
			$scope.artesoes = data.list;
		});

		artesanatoApi.getArtesanatos().success(function(data,status){
			console.log("Lista de Artesanatos");
			$scope.artesanatos = data.list;
		});

	};


	$scope.artesao = $rootScope.artesao;
	$scope.imgUrl = configUrl.urlImg;
	$scope.avatar = $scope.artesao.imgPerfil;
	$scope.carregarArtesao = function(artesao){
		$scope.artesao = artesao;
		//$location.url('/artesao');
	};
});