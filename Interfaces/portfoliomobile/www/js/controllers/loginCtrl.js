angular.module("app").controller('loginCtrl', function($scope,$location,$rootScope, localStorageService,configUrl,loginApi){

   

    $scope.logar = function(login){
         
          loginApi.logar(login).success(function(data){
                        
            localStorageService.set('artesao',data.artesao);
            $rootScope.artesao =  localStorageService.get('artesao');
            $location.path('/initialpage');
          }); 
    } 


});

