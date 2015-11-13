angular.module("app").controller('artesaoCtrl', function($scope,$location,$rootScope,localStorageService,artesanatoApi){ 
    
   
    	$scope.artesao =  localStorageService.get('artesao');
     
    	     
 
   //Função para Lsita Artesantos 
  $scope.listaArtesanatos = function(){

   		artesanatoApi.listArtesanatoIdArtesao($scope.artesao.idArtesao).success(function(data,status){
   			localStorageService.set('artesanatos',data.list);
        $scope.artesanatos = localStorageService.get('artesanatos');

        
      }).error(function(data,status){

   		});

      
   };



   //função de remoção de artesanto
   $scope.removerArtesanto = function(artesanto){

    artesanatoApi.removeArtesanato(artesanto).success(function(data,status){

      $scope.listaArtesanatos();

    }).error(function(data,status){

    });

   };
    
   $scope.alteraArtesanato = function(artesanato){
      $rootScope.artesanato = artesanato;
      $location.url("/editarartesanato");
      

   }; 
    
   $scope.cadastroArtesanato = function(){
       $scope.artesanato = null; 
       $rootScope.artesanato = null;
       $location.url('/cadastrarartesanato');
    };

  $scope.tab = 1;
  
  $rootScope.setTab = function(newTab){
    $scope.tab = newTab;
    $scope.listaArtesanatos();
  };
  
  $scope.isSet = function(tabNum){
    return $scope.tab === tabNum;
  };
  
  
   
 
 
});