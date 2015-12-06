angular.module("app").controller('artesanatoCtrl', function($scope,$rootScope,localStorageService,$location,artesanatoApi,$cordovaCamera,configUrl){ 
    
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
         
         $scope.art = data.artesanato;
         
         $scope.art.fotoArtesanato = $scope.art.idartesanato+"FotoArtesanato.jpg";
         $scope.upadateArtesanato($scope.art);
         
         $scope.upload($rootScope.imgURI);
         
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

   $scope.upadateArtesanato = function(artesanato){

    $scope.artesanato = artesanato;

    artesanatoApi.alteraArtesanato($scope.artesanato).success(function(status){
        console.log("Cadastro do Artesanato concludio ",status);
            
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
       
      $rootScope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    };


    $scope.upload = function(filePath){
      
      var win = function (r) {
          console.log("Code = " + r.responseCode);
          console.log("Response = " + r.response);
          console.log("Sent = " + r.bytesSent);

      }

      var fail = function (error) {
          alert("An error has occurred: Code = " + error.code);
          console.log("upload error source " + error.source);
          console.log("upload error target " + error.target);
      }

      var options = new FileUploadOptions();
      options.fileKey = "foto";
      options.fileName = $scope.art.idartesanato+"FotoArtesanato";
      options.mimeType = "image/jpeg";
      options.httpMethod = "POST";

      var params = {};
      params.value1 = "test";
      params.value2 = "param";

      options.params = params;

      var ft = new FileTransfer();
      ft.upload(filePath, encodeURI(configUrl.baseUrl+"/Portifolio/artesanato/ArtesanatoFoto"), win, fail, options);


 }
  
    
});