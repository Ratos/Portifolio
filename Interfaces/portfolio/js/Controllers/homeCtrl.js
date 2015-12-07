angular.module('site').controller('homeCtrl', function($scope,artesaoApi,artesanatoApi,$location,$rootScope,configUrl){

	$scope.imgUrl = configUrl.urlImg;

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

	$scope.carregarArtesao = function(artesao){
		$scope.artesao = artesao;
		//$location.url('/artesao');
	};

	$scope.carregarArtesanato = function(artesanato){
		$rootScope.artesanato = artesanato;
		$location.url('/artesanato');
	};
});