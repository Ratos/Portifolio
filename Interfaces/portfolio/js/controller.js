//Aqui está feito o controlador do site, onde as rotas estão implementadas
//e certas coisas ainda por fazer...


angular.module('site', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/home');
 
    .state('index.html', {
      url: '/home',
      templateUrl: 'index.html'
      
    })
    
    .state('categoria.html', {
      url: '/categoria',
      templateUrl: 'categoria.html',
      controller: 'indexController'
      
    })
    
    .state('artesao.html', {
      url: '/artesao',
      templateUrl: 'artesao.html'
      
    });
    
    $urlRouterProvider.otherwise('/home');
    
}).controller('indexController', function($scope,$http,$location){

	
});