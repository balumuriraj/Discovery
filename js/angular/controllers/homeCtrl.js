'use strict';

/**
 * @ngdoc function
 * @name discoveryApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the discoveryApp
 */

app.controller('HomeCtrl', ['$scope', '$location', 'userFactory', function ($scope, $location, userFactory) {
    $scope.showasu = true;
    $scope.asuuser = {userid: '', password: ''};
    $scope.guestuser = {id:'', email: '', name: ''};
    $scope.loading = false;
    $scope.serviceerror = false;
    
    $scope.toggleclass = function(id) {
        if(id == 'asu'){
            $scope.showasu = true; 
            $scope.guestuser = {email: '', name: ''};
            $scope.guestForm.$setPristine();
            $scope.loading = false;
            $scope.serviceerror = false;
        }
        else{
            $scope.showasu = false;    
            $scope.asuuser = {userid: '', password: ''};
            $scope.asuForm.$setPristine();
            $scope.loading = false;
            $scope.serviceerror = false;
        }
    }
    
    $scope.submitASUForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert("Login success!");
        }
    }
    
    $scope.submitGuestForm = function(isValid) {

        $scope.loading = true;
        
        // check to make sure the form is completely valid
        if (isValid) {
            userFactory.guestUserLogin($scope.guestuser)
                .success(function(responsedata){
                    $scope.loading = false;
                    $scope.serviceerror = false;
                    $location.path('/labs');
                })
                .error(function(data) {
                    $scope.loading = false;
                    $scope.serviceerror = true;
                });
        }
    }
}]);