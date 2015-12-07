angular.module('site').controller('categoriaArtCtrl', function($scope,artesaoApi,artesanatoApi,$location,$rootScope,configUrl){

	$scope.imgUrl = configUrl.urlImg;

	$scope.listAll = function(){

		artesaoApi.getArtesoes().success(function(data,status){
			console.log("Lista de Artesões");
			$scope.artesoes = data.list;
		});

	};

	$scope.artesanatos = $rootScope.artesanatos;

	$scope.carregarArtesanato = function(artesanato){
		$rootScope.artesanato = artesanato;
		$location.url('/artesanato');
	};

	$scope.buscafiltro = function(categoria){
		artesanatoApi.getArtesanatosCategoria(categoria).success(function(data,status){
			$rootScope.artesanatos = data.list;
			$location.url('/explorarArt');
		});
	};
});