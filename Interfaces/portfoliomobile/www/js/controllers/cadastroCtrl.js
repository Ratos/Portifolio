angular.module("app").controller('cadastroCtrl', function($scope,$rootScope,$location,configUrl,cadastroApi){ 
    
    


    $scope.addArtesao = function(artesao){
    	
    	cadastroApi.saveArtesao(artesao).success(function(data, status){
       	$location.path('/login');
       	console.log("Cadastro Realizado com Sucesso ",data, status);
      
      }).error(function(data, status){
      		
      		alert("erro ",status);
      		console.error("erro ao realizar o Cadastro ",status,data)	
      });
    	
    };

    $scope.validarEmail = function(artesao){
        
      if (artesao.email != null) {
        cadastroApi.validarEmail(artesao.email).success(function(data,status){

            $scope.result = data.boolean;
        });  
      }else{
        $scope.result = true;
      };
     

    };

    $scope.emailValide = function(){
     
      if($scope.result != null){
        if ($scope.result == true) {
              
              return true;
            }else{
              
              return false;
       };
      };

    };

    
});