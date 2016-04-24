angular.module('MyApp').controller('ShareCtrl', ['$scope','$log','$http','$window','toastr', function($scope,$log,$http,$window,toastr) {
          
          $scope.email1 = "";
           $scope.email2 = "";
            $scope.email3 = "";
             $scope.email4 = "";

      $scope.submit = function() {

        
            
            if ($scope.email1 || $scope.email2 || $scope.email3 || $scope.email4) {
            var userid= localStorage.getItem('currentUser');
            $log.log($scope.email1);
            $log.log($scope.email2);
            $log.log($scope.email3);
            $log.log($scope.email4);
            $http.post('/api/user/'+userid+'/wishlistshare', {email1: $scope.email1, email2: $scope.email2 , email3: $scope.email3, email4: $scope.email4})
              .success(function (data) {
                if (data.message=="Success"){
                   toastr.success('Successfully Shared');
                  $log.log(data);

              }else if(data.message=="Wishlist not Shared"){
                  $log.log(data);

              }
            })
              .error(function(error) {
                    $log.log(error);
                    toastr.error("Failed to Send");
              });
            };
      };
     
    }]);

angular.module('MyApp').controller('socialCtrl', ['$scope','$log','$http', function($scope,$log,$http) {
          var user = localStorage.getItem('currentUser');
          $http.get('/api/user/getUrl')
            .success(function (data){
              $scope.url = "http://127.0.0.1/" + user + "/wishlist:" + data;
             })
            .error(function(error) {
              $log.log(error)
});             
            

            
     
    }]);


