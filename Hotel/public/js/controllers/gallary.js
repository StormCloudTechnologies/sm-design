angular.module('gallary.controllers', [])
.controller('GallaryCtrl', function($scope, $rootScope, $state, APIService) {
  $rootScope.activeState = 'services';
 	
  $scope.Serviceslists = [];
  $scope.getServices = function() {
     APIService.getData({
            req_url: url_prifix + 'api/getServices'
        }).then(function(resp) {
            if(resp.data.length!=0) {
              $scope.no_product = false;
              $scope.Serviceslists = resp.data;

            }else{
              $scope.no_product = true;
              $scope.Serviceslists = [];
            }
           },function(resp) {
              // This block execute in case of error.
        });
    };
  $scope.getServices();
})