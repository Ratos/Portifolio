angular.module("app").controller('artesaoCtrl', function($scope,$location,$rootScope,localStorageService,artesanatoApi,artesaoApi,configUrl,$cordovaCamera,$cordovaFileTransfer){ 
    
  $scope.artesao =  localStorageService.get('artesao');
  // $scope.getArtesao = function(){

  //   artesaoApi.getArtesao($scope.artesao.idArtesao).success(function(data,status){

  //     localStorageService.set("artesao",data.artesao);
  //     $scope.artesao = localStorageService.get('artesao');
  //   }).error(function(data,status){

  //   });

  // }

   //Função para Lista Artesantos 
  $scope.listaArtesanatos = function(){

   		artesanatoApi.listArtesanatoIdArtesao($scope.artesao.idArtesao).success(function(data,status){
   			localStorageService.set('artesanatos',data.list);
        $scope.artesanatos = localStorageService.get('artesanatos');

        
      }).error(function(data,status){

   		});

      
   };



   //Função de remoção de artesanto
   $scope.removerArtesanto = function(artesanto){

    artesanatoApi.removeArtesanato(artesanto).success(function(data,status){

      $scope.listaArtesanatos();

    }).error(function(data,status){

    });

   };

  //Função Alterar Artesanato 
  $scope.alteraArtesanato = function(artesanato){
        $rootScope.artesanato = artesanato;
        $location.url("/editarartesanato");
        

  }; 
  //Função Alterar Atesao
  $scope.alteraArtesao = function(artesao){
        

        $scope.artesao = artesao;
        artesaoApi.alteraArtesao($scope.artesao,$scope.artesao.foto).success(function(data,status){
          console.log($scope.artesao.tel);
          $location.url('/initialpage');

        }).error(function(data,status){
        
        });


  }
  //função de cancelar edição do Artesão
  $scope.editArtesaoCan = function(){
    $location.url('/initialpage');
  }


  //Função para ir a Pagina de Cadadastro de Artesanato  
  $scope.cadastroArtesanato = function(){
       $scope.artesanato = null; 
       $rootScope.artesanato = null;
       $location.url('/cadastrarartesanato');
    };
  //logout da aplicação (Sair do Aplicativo)  
  $scope.logout = function(){
      localStorageService.clearAll();

      $location.url('/login');
      $rootScope.artesao = null;
      
    }
//Função para Camera 
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
       
      $scope.imgAvatar = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        console.log("Erro: ",err)
      });
    };

//Função tranferencia de img para API (Webservice)
    $scope.upload = function() {
        var options = {
            fileKey: "foto",
            fileName: $scope.artesao.idArtesao+"PerfilImg"+1,
            chunkedMode: false,
            mimeType: "image/JPEG"
        };
        
        $cordovaFileTransfer.upload(configUrl.baseUrl+"/Portifolio/artesao/atualizaFoto", $scope.imgAvatar, options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
    }    


//Função de selção de tabela de exibição
  $scope.tab = 1;
  
  $rootScope.setTab = function(newTab){
      $scope.tab = newTab;
      
      $scope.listaArtesanatos();
    };
  
  $scope.isSet = function(tabNum){
    return $scope.tab === tabNum;
  };
  
  
   
 
 
});