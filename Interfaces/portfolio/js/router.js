angular.module('site', ['ngRoute']).config(function ($routeProvider,configUrl) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    })
    .when('/explorar', {
        templateUrl: 'categoria.html',
        controller: 'categoriaCtrl'
    })
    .when('/explorarArt', {
        templateUrl: 'categoriaartesanato.html',
        controller: 'categoriaArtCtrl'
    })
    .when('/artesao', {
        templateUrl: 'artesao.html',
        controller: 'artesaoCtrl'
    })
    .otherwise({
      templateUrl: 'home.html'
    });

});