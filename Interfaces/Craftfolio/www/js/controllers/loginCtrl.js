angular.module("app").controller('loginCtrl', function($scope,$location,$rootScope, localStorageService,configUrl,loginApi,cadastroApi){

  
	$scope.login = null;
    $scope.logar = function(login){
			
					loginApi.logar(login).success(function(data){
					 
					 	
					 	if (data.artesao != null) {
					 		
					 		localStorageService.set('artesao',data.artesao);
							$rootScope.artesao =  localStorageService.get('artesao');
						 	$location.path('/initialpage');
						 	$scope.erro = false;

					 	}else{
					 		
					 		$scope.erro = true;

					 	};
					}); 
        
	};	
});

