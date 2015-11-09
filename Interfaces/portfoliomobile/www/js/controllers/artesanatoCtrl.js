angular.module("app").controller('artesanatoCtrl', function($scope,$rootScope,localStorageService,$location,artesanatoApi){ 
    
	$scope.artesao = localStorageService.get('artesao');
	$scope.artesanato = {};


   /*
        *Função ListaArtesanatos: requer injeção da Factory ArtesanatoApi.
    */
    $scope.listaArtesanatos = function(){

         artesanatoApi.listArtesanatoIdArtesao($scope.artesao.idArtesao).success(function(data,status){
            localStorageService.set('artesanatos',data.list);
            console.log($scope.artesao.idArtesao);
         }).error(function(data,status){

         });
   }
    


   $scope.addArtesanato = function(artesanato){
   	
    $scope.artesanato = artesanato;
   	$scope.artesanato.idArtesao = $scope.artesao.idArtesao;

	   	artesanatoApi.saveArtesanato($scope.artesanato).success(function(data,status){
	            $scope.listaArtesanatos();           
	            $location.path('/initialpage');
	    }).error(function(data,status){

	    	console.error("Erro ao Cadastra Artesanato",data,status);
	    }); 
	   
   }

   
    
    
});