'use strict';

/**
 * @ngdoc function
 * @name discoveryApp.controller:ConsentCtrl
 * @description
 * # ConsentCtrl
 * Controller of the discoveryApp
 */

app.controller('ConsentCtrl', ['$scope', '$location', '$routeParams', 'labsFactory',
    function ($scope, $location, $routeParams, labsFactory) {
        
        function init(){
            console.log("Id is " + $routeParams.id);            
            var id = $routeParams.id;
            
            labsFactory.getLab(id)
                .success(function(responsedata){
                    $scope.lab = responsedata;
                })
                .error(function(data) {
                    alert("Please try again");
                });

        };
        
        init();
        
        $scope.startLab = function(id){
            $location.path('/lab/'+id);
        }

}]);