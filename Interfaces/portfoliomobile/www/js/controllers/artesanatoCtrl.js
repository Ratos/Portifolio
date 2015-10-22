angular.module("app").controller('artesanatoCtrl', function($scope,$http,$rootScope,localStorageService,$location){ 
    
	$scope.artesao = localStorageService.get('artesao');
	$scope.artesanato = {};

   $scope.addArtesanato = function(artesanato){
   	
    $scope.artesanato = artesanato;
   	$scope.artesanato.idArtesao = $scope.artesao.idArtesao;

	   	$http.post("http://192.168.1.5:8080/Portifolio/artesanato/salvar", $scope.artesanato).success(function(data,status){
	            console.log("Artesanato adicionado com sucesso")            
	            $location.path('/initialpage');
	    }).error(function(data,status){

	    	console.error("Erro ao Cadastra Artesanato",data,status);
	    }); 
	   
   }
});