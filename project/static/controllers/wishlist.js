angular.module('MyApp').controller('WishCtrl' , ['$scope','$http','$log','$window', function ($scope,$http,$log,$window) {
	var userid= localStorage.getItem('currentUser');
	$http.get('/api/user/'+userid+'/wishlist')
        .success(function(data) {
        	$scope.wishes = data.data.wishes;

        	$log.log($scope.wishes);
        	
      })
        .error(function(error) {
        $log.log(error);
      });
        $scope.go = function() {
   			$window.location.href = '/#/add';
   };
   $scope.share = function() {
        $window.location.href = '/#/share';
   };

   $scope.delete = function() {
   
      $http.post('/api/user/'+ userid +'/wishlist/delete/' + this.wish.id)
      .success(function(data) {
        if (data.message == 'Success') {
        $window.location.reload();
      }else if(data.message == 'Failed'){
        $log.log(data);
      }
      })
     .error(function(error) {
         $log.log(error);
      })
   };






}]);