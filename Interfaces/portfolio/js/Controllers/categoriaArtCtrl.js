angular.module('site').controller('categoriaArtCtrl', function($scope,artesaoApi,artesanatoApi,$location,$rootScope,configUrl){

	

	$scope.listAll = function(){

		artesaoApi.getArtesoes().success(function(data,status){
			console.log("Lista de Artesões");
			$scope.artesoes = data.list;
		});

	};

$scope.artesanatos = $rootScope.artesanatos;

	$scope.carregarArtesao = function(artesao){
		$scope.artesao = artesao;
		$location.url('/artesao');
	};
});