angular.module('site').controller('siteCtrl', function($scope,artesaoApi,artesanatoApi,$location){

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

});