angular.module('site', ['ngRoute'])
.config(function ($routeProvider, $locationProvider, config) {
    $routeProvider
    .when('/home', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    })
    .when('/explorar', {
        templateUrl: 'categoria.html',
        controller: 'categoriaCtrl'
    })
    .when('/artesao', {
        templateUrl: 'artesao.html',
        controller: 'artesaoCtrl'
    })
    .otherwise({
      templateUrl: 'home.html'
    });

});