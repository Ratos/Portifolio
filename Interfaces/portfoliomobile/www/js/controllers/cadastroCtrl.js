angular.module("app").controller('cadastroCtrl', function($scope,$http,$rootScope){ 
    
    $scope.addArtesao = function(artesao){
      
      $http.post("http://192.168.1.5:8080/Portifolio/cadastro/save", artesao).success(function(data, status){
      		console.log("Cadastro Realizado com Sucesso ",data, status)
      		$location.path('/login');
      }).error(function(data, status){

      		console.error("erro ao realizar o Cadastro ",status,data)	
      });
 
    }



	
});