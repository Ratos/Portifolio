angular.module("app").controller('artesanatoCtrl', function($scope,$rootScope,localStorageService,$location,artesanatoApi,$cordovaCamera){ 
    
	 $scope.artesao = localStorageService.get('artesao');
    

   /*
        *Função ListaArtesanatos: requer injeção da Factory ArtesanatoApi.
    */

   

     $scope.listaArtesanatos = function(){

      artesanatoApi.listArtesanatoIdArtesao($scope.artesao.idArtesao).success(function(data,status){
        localStorageService.set('artesanatos',data.list);
        
      }).error(function(data,status){

      });

      $scope.artesanatos = localStorageService.get('artesanatos');

   };
    
   $scope.addArtesanato = function(artesanato){
   	$scope.artesanatoPersite = {};
    $scope.artesanatoPersite = artesanato;
   	$scope.artesanatoPersite.idArtesao = $scope.artesao.idArtesao;

	   	artesanatoApi.saveArtesanato($scope.artesanatoPersite).success(function(data,status){
         
         $location.url('/initialpage'); 
         $rootScope.setTab(2);
	    }).error(function(data,status){

	    	console.error("Erro ao Cadastra Artesanato",data,status);
	    }); 
   }

   $scope.alterarArtesanato = function(artesanato){

    $scope.artesanato = artesanato;

    artesanatoApi.alteraArtesanato($scope.artesanato).success(function(){

         $location.url('/initialpage');    
    }).error(function(data,status){

        console.error("Erro ao Cadastra Artesanato",data,status);
      }); 


   };

   $scope.cancelarEdicao = function(){
      $rootScope.artesanato = null;
      $location.url('/initialpage');

   }

   $scope.takePicture = function () {
      
    
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit:false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true,
      correctOrientation:true
    };

      $cordovaCamera.getPicture(options).then(function(imageData) {
       
      $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    };
  
    
});