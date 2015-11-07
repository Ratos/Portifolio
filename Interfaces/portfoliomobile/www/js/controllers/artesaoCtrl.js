angular.module("app").controller('artesaoCtrl', function($scope,$http,$rootScope,localStorageService,artesanatoApi){ 
    
     $scope.carregardados = function(){
    	$scope.artesao =  localStorageService.get('artesao');
    	console.log($scope.artesao.nome);
    }

    /*
	Função ListaArtesanatos: requer injeção da Factory ArtesanatoApi.
    */
    $scope.listaArtesanatos = function(){

   		artesanatoApi.listArtesanatos().success(function(data,status){
   			localStorageService.set('artesanatos',data.artesanatos);
   		}).error(function(data,status){

   		});
   }
})