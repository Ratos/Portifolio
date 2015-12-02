angular.module("app").controller('artesaoCtrl', function($scope,$location,$rootScope,localStorageService,artesanatoApi,artesaoApi,configUrl,$cordovaCamera,$cordovaFileTransfer,$cordovaFile){ 
    
  $scope.artesao =  localStorageService.get('artesao');
  
 $scope.getArtesao = function(){

     artesaoApi.getArtesao($scope.artesao.idArtesao).success(function(data,status){

      localStorageService.set("artesao",data.artesao);
      $scope.artesao = localStorageService.get('artesao');
    }).error(function(data,status){

   });

};

   //Função para Lista Artesantos 
  $scope.listaArtesanatos = function(){

   		artesanatoApi.listArtesanatoIdArtesao($scope.artesao.idArtesao).success(function(data,status){
   			localStorageService.set('artesanatos',data.list);
        $scope.artesanatos = localStorageService.get('artesanatos');

        
      }).error(function(data,status){

   		});

      
   };



   //Função de remoção de artesanto
   $scope.removerArtesanto = function(artesanto){

    artesanatoApi.removeArtesanato(artesanto).success(function(data,status){

      $scope.listaArtesanatos();

    }).error(function(data,status){

    });

   };

 
 //Função Alterar Artesanato 
  $scope.alteraArtesanato = function(artesanato){
        $rootScope.artesanato = artesanato;
        $location.url("/editarartesanato");
        

  };

  
  

  //Função para ir a Pagina de Cadadastro de Artesanato  
  $scope.cadastroArtesanato = function(){
       $scope.artesanato = null; 
       $rootScope.artesanato = null;
       $location.url('/cadastrarartesanato');
    };
 
  //logout da aplicação (Sair do Aplicativo)  
  $scope.logout = function(){
      localStorageService.clearAll();

      $location.url('/login');
      $rootScope.artesao = null;
      
    }

//Função de selção de tabela de exibição
 $scope.tab = 1;
$rootScope.setTab = function(newTab){
      $scope.tab = newTab;
      
      if ($scope.tab == 2) {

        $scope.listaArtesanatos();
      };
      
    };
  
  $scope.isSet = function(tabNum){
    return $scope.tab === tabNum;
  }; 
});