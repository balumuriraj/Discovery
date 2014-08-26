'use strict';

/**
 * @ngdoc function
 * @name discoveryApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the discoveryApp
 */

app.controller('HomeCtrl', function ($scope) {
    $scope.showasu = true;
    $scope.asuuser = {userid: '', password: ''};
    $scope.guestuser = {email: '', name: ''};
    
    $scope.toggleclass = function(id) {
        if(id == 'asu'){
            $scope.showasu = true; 
        }
        else{
            $scope.showasu = false;    
        }
    }
    
    $scope.submitASUForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert("Login success!");
        }
    }
    
    $scope.submitGuestForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert("Login success!");
        }
    }
});