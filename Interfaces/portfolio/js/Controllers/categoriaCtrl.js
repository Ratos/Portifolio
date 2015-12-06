angular.module('site').controller('categoriaCtrl', function($scope,artesaoApi,artesanatoApi,$location,$rootScope, configUrl){
	
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
		$rootScope.artesao = artesao;
		$location.url('/artesao');
	};

	$scope.buscafiltro = function(categoria){
		artesanatoApi.getArtesanatosCategoria(categoria).success(function(data,status){
			$rootScope.artesanatos = data.list;
			$location.url('/explorarArt');
		});
	};

	$scope.imgUrl = configUrl.urlImg;
});