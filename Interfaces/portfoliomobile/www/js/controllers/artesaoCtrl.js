angular.module("app").controller('artesaoCtrl', function($scope,$http,$rootScope,localStorageService,artesanatoApi){ 
    
     $scope.carregardados = function(){
    	$scope.artesao =  localStorageService.get('artesao');
    	console.log($scope.artesao.nome);
    }

    /*
	Função ListaArtesanatos: requer injeção da Factory ArtesanatoApi.
    */
    $scope.listaArtesanatos = function(){

   		artesanatoApi.listArtesanatoIdArtesao($scope.artesao.idArtesao).success(function(data,status){
   			localStorageService.set('artesanatos',data.list);
        console.log($scope.artesao.idArtesao);
   		}).error(function(data,status){

   		});
   }

    $scope.artesanatos = localStorageService.get('artesanatos');
})