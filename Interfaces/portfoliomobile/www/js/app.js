// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','LocalStorageModule','ngCordova']).run(function($ionicPlatform,cadastroApi,loginApi,artesanatoApi) {
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

}).config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider,configUrl) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('page2', {
      url: '/login',
      templateUrl: 'page2.html',
      controller: 'loginCtrl'
      
    })
    
    .state('page3', {
      url: '/cadastro',
      templateUrl: 'page3.html',
      controller: 'cadastroCtrl'
      
     })
    
    .state('page4', {
      url: '/initialpage',
      templateUrl: 'page4.html',
      controller: 'artesaoCtrl'
      
      
    })
	.state('page5', {
      url: '/cadastrarartesanato',
      templateUrl: 'page5.html',
      controller: 'artesanatoCtrl'
      
     })
	
	.state('page6', {
      url: '/editarartesao',
      templateUrl: 'page6.html',
      controller: 'cadastroCtrl'
      
   })
   
   .state('page7', {
      url: '/editarartesanato',
      templateUrl: 'page7.html',
      controller: 'artesanatoCtrl'
      
   });
   
  // configuração local storage module
  localStorageServiceProvider.setPrefix('Portfolio');
  localStorageServiceProvider.setStorageType('localStorage');
  localStorageServiceProvider.setStorageCookie(0, '/');

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
  


}).controller('indexController', function($scope,$http,$location){

	$scope.tab = 1;
	
	$scope.setTab = function(newTab){
		$scope.tab = newTab;
	};
	
	$scope.isSet = function(tabNum){
		return $scope.tab === tabNum;
	};
	
	/* $scop.showPopup = function() {
		$scope.data = {}
		$scope.showConfirm = function() {
		   var confirmPopup = $ionicPopup.confirm({
			 title: 'Consume Ice Cream',
			 template: 'Are you sure you want to eat this ice cream?'
		   });
		   confirmPopup.then(function(res) {
			 if(res) {
			   console.log('You are sure');
			 } else {
			   console.log('You are not sure');
			 }
		   });
		};
	}; */
});