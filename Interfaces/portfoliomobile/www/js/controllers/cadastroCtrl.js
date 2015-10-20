angular.module("app").controller('cadastroCtrl', function($scope,$http,$rootScope,localStorageService){ 
    
    $scope.addArtesao = function(artesao){
      $http.post("http://192.168.1.4:8080/portifolio/cadastro/save", artesao);
    };

    (function() {
  
	  'use strict';

	  angular
		.module( 'app' )
		.controller( 'FormController', FormController );

	  FormController.$inject = [ '$scope' ];

	  function FormController( $scope ) {

		var artesao = this;

		///////////// Properties
		artesao = {};

		///////////// Public Methods
		

		///////////// Private Methods

		/////////////
		
		//Darlan, olha se essa bagaça aqui ta salvando alguma coisa... não sei
		// ao certo se ela é necessária...
		function save( data ) {

		  console.log( 'Dados foram mandados com Sucesso' );
		  console.log( JSON.stringify( data, null, 2 ));
		  
		  artesao = {};

		  // we need $scope to use this method
		  $scope.cadastroForm.$setPristine();

		}

	  }

	}());
})