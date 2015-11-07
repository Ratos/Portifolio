angular.module("app").controller('artesanatoCtrl', function($scope,$rootScope,localStorageService,$location,artesanatoApi){ 
    
	$scope.artesao = localStorageService.get('artesao');
	$scope.artesanato = {};

   $scope.addArtesanato = function(artesanato){
   	
    $scope.artesanato = artesanato;
   	$scope.artesanato.idArtesao = $scope.artesao.idArtesao;

	   	artesanatoApi.saveArtesanato($scope.artesanato).success(function(data,status){
	            console.log("Artesanato adicionado com sucesso")            
	            $location.path('/initialpage');
	    }).error(function(data,status){

	    	console.error("Erro ao Cadastra Artesanato",data,status);
	    }); 
	   
   }

   /*$scope.listaArtesanatos = function(){

   		artesanatoApi.listArtesanatos().success(function(data,status){
   			localStorageService.set('artesanatos',data.artesanatos);
   		}).error(function(data,status){

   		});
   }*/
});