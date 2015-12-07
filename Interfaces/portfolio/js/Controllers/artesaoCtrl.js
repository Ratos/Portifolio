angular.module('site').controller('artesaoCtrl', function($scope,artesaoApi,artesanatoApi,$location,$rootScope,configUrl){
	
	


	$scope.artesao = $rootScope.artesao;
	$scope.imgUrl = configUrl.urlImg;
	$scope.avatar = $scope.artesao.imgPerfil;
	$scope.carregarArtesao = function(artesao){
		$scope.artesao = artesao;
		//$location.url('/artesao');
	};

	$scope.carregarArtesanato = function(artesanato){
		$rootScope.artesanato = artesanato;
		$location.url('/artesanato');
	};

	$scope.listAll = function(){

		artesanatoApi.artesanatosArtesao($scope.artesao.idArtesao).success(function(data,status){
			console.log("Lista de Artesanatos");
			$scope.artesanatos = data.list;
		});

	};
});