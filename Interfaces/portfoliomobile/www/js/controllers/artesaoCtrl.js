angular.module("app").controller('artesaoCtrl', function($scope,$http,$rootScope,localStorageService){ 
    
     $scope.carregardados = function(){
    	$scope.artesao =  localStorageService.get('artesao');
    	console.log($scope.artesao.nome);
    }
})