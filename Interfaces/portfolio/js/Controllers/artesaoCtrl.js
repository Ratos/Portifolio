angular.module("site").controller('artesaoCtrl', function($scope,$location,$rootScope,artesanatoApi,artesaoApi,configUrl){
  
    $scope.artesao =  localStorageService.get('artesao');
    
      //Função para Lista Artesantos 
      $scope.listaArtesanatos = function(){

          artesanatoApi.listArtesanatoIdArtesao($scope.artesao.idArtesao).success(function(data,status){
            localStorageService.set('artesanatos',data.list);

          }).error(function(data,status){

          });

          $scope.artesanatos = localStorageService.get('artesanatos');

       };
    
    
    
});