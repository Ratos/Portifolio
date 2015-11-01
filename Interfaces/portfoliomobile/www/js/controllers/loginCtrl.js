angular.module("app").controller('loginCtrl', function($scope,$http,$location,$rootScope, localStorageService){

   

    $scope.logar = function(login){
         
          	$http.post("http://192.168.1.5:8080/Portifolio/artesao/logar", login).success(function(data){
                        
            localStorageService.set('artesao',data.artesao);
            $rootScope.artesao =  localStorageService.get('artesao');
            $location.path('/initialpage');
          }); 
    } 


});

