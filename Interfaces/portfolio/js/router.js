angular.module('site', ['ngRoute'])
.config(function ($routeProvider, $locationProvider, config) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        
    })
    .when('/explorar', {
        templateUrl: 'categoria.html',
        
    })
    .when('/artesao', {
        templateUrl: 'artesao.html',
    })
    .otherwise({
      redirectTo: '/'
    });

});