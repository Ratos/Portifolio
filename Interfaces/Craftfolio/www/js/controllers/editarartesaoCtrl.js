angular.module("app").controller('editarartesaoCtrl', function($scope,$location,$rootScope,localStorageService,artesanatoApi,artesaoApi,configUrl,$cordovaCamera,$cordovaFileTransfer,$cordovaFile){ 

  $scope.artesao =  localStorageService.get('artesao');


  //Função Alterar Atesao
  $scope.alteraArtesao = function(artesao){
        
        $scope.artesao = artesao;
        $scope.artesao.imgPerfil = $scope.artesao.idArtesao+"FotoPerfil.jpg";
       
        artesaoApi.alteraArtesao($scope.artesao).success(function(data,status){
        
           // $scope.testFileUpload();      
            $scope.upload($rootScope.imgAvatar);
            $location.url('/initialpage');

        }).error(function(data,status){
          
        });
  }

  //Função Camera 
  $scope.takePicture = function () {
      
    
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit:false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true,
      correctOrientation:true
    };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $rootScope.imgAvatar = "data:image/jpeg;base64," + imageData;
        
      }, function(err) {
        console.log("Erro: ",err)
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
      options.fileName = $scope.artesao.idArtesao+"FotoPerfil.jpg";
      options.mimeType = "image/jpeg";
      options.httpMethod = "POST";

      var params = {};
      params.value1 = "test";
      params.value2 = "param";

      options.params = params;

      var ft = new FileTransfer();
      ft.upload(filePath, encodeURI("http://192.168.1.2:8080/Portifolio/artesao/atualizaFoto"), win, fail, options);


 }
});