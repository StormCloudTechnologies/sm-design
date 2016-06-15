var url_prifix = 'http://52.36.75.89/';

angular.module('AppModule', [])

.controller('AppCtrl', function($scope, APIService) {
    $scope.mail = {};
    $scope.sendEmail = function(mail) {
        if(mail && (mail.name != null || mail.name != '' || mail.name != undefined) && (mail.email != null || mail.email != '' || mail.email != undefined) && (mail.phone != null || mail.phone != '' || mail.phone != undefined) && (mail.message != null || mail.message != '' || mail.message != undefined))
        {
            APIService.setData({
                req_url: url_prifix + 'api/sendMail',
                data: mail
            }).then(function(resp) {
                $scope.successMessage = resp.data.message;
                $scope.mail.name = '';
                $scope.mail.email = '';
                $scope.mail.phone = '';
                $scope.mail.message = '';
               },function(resp) {
                  // This block execute in case of error.
            });
        }
    };
})

.factory('APIService', ['$http', function($http) {
    return {
        getData: function(obj){
            var xhr = $http({
                url: obj.req_url,
                method: 'GET',
                data: obj.data,
                headers: {'Content-Type': 'application/json'}
            });
            return xhr;
        },
        setData: function(obj){
            var xhr = $http({
                url: obj.req_url,
                method: 'POST',
                data: obj.data,
                headers: {'Content-Type': 'application/json'}
            });
            return xhr;
        },
        removeData: function(obj){
            var xhr = $http({
                url: obj.req_url,
                method: 'DELETE',
                data: obj.data,
                headers: {'Content-Type': 'application/json'}
            });
            return xhr;
        },
        updateData: function(obj){
            var xhr = $http({
                url: obj.req_url,
                method: 'PUT',
                data: obj.data,
                headers: {'Content-Type': 'application/json'}
            });
            return xhr;
        }
    };
}]);