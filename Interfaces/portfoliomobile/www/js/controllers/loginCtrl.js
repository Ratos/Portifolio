angular.module("app").controller('loginCtrl', function($scope,$http,$location,$rootScope, localStorageService){

   

    $scope.logar = function(login){
         
          	$http.post("http://192.168.1.4:8080/portifolio/artesao/logar", login).success(function(data){
            
            
            localStorageService.set('artesao',data.artesao);
            $rootScope.artesao =  localStorageService.get('artesao');
            $location.path('/initialpage');
          }); 
    } 


});

