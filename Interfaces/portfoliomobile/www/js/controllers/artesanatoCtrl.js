angular.module("app").controller('artesanatoCtrl', function($scope,$http,$rootScope,localStorageService){ 
    
    $scope.carregardados = function(){
    	$scope.artesanatos = localStorageService.get('artesanatos');
    	console.log($scope.artesanatos.nome);
    };
});