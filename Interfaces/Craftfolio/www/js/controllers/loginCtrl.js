angular.module("app").controller('loginCtrl', function($scope,$location,$rootScope, localStorageService,configUrl,loginApi,cadastroApi){

  
	
    $scope.logar = function(login){
			
					loginApi.logar(login).success(function(data){
					 	
					 	if (data != null) {
					 		localStorageService.set('artesao',data.artesao);
							$rootScope.artesao =  localStorageService.get('artesao');
						 	$location.path('/initialpage');
					 	}else{
					 		$location.url('/login');
					 	};
					}); 
        
	};	
});

