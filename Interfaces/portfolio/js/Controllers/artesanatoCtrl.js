angular.module('site').controller('artesanatoCtrl', function($scope,artesaoApi,artesanatoApi,$location,$rootScope,configUrl){
	


	$scope.artesanato = $rootScope.artesanato;
	$scope.idArtesao = $scope.artesanato.idArtesao;
	$scope.imgUrl = configUrl.urlImg;


	$scope.getidArt = function(){

		artesaoApi.artesaoGet($scope.idArtesao).success(function(data,status){
			console.log("Get de Artesões");
			$scope.artesao = data.artesao;
		});

	};
	
	$scope.carregarArtesao = function(artesao){
		$rootScope.artesao = artesao;
		$location.url('/artesao');
	};
	
});