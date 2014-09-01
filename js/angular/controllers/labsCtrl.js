'use strict';

/**
 * @ngdoc function
 * @name discoveryApp.controller:LabsCtrl
 * @description
 * # LabsCtrl
 * Controller of the discoveryApp
 */

app.controller('LabsCtrl', ['$scope', 'labsFactory',
    function ($scope, labsFactory) {

        function init() {
            labsFactory.getAllLabs()
                .success(function (responsedata) {
                    $scope.labs = responsedata;
                })
                .error(function (data) {
                    $scope.servicerror = true;
                });
        };
        
        init();
}]);