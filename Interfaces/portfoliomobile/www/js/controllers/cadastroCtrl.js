angular.module("app").controller('cadastroCtrl', function($scope,$rootScope,$location,configUrl,cadastroApi){ 
    
    


    $scope.addArtesao = function(artesao){
    	
    	cadastroApi.saveArtesao(artesao).success(function(data, status){
       	$location.path('/login');
       	console.log("Cadastro Realizado com Sucesso ",data, status);
      
      }).error(function(data, status){
      		
      		alert("erro ",status);
      		console.error("erro ao realizar o Cadastro ",status,data)	
      });;
    	
    };
    	
});