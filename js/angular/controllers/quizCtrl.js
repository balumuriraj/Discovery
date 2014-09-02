'use strict';

/**
 * @ngdoc function
 * @name discoveryApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the discoveryApp
 */

app.controller('QuizCtrl', ['$scope', '$routeParams', 'labsFactory', 'userFactory', function ($scope, $routeParams, labsFactory, userFactory) {
    
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
        
            userFactory.getUser()
                .success(function(responsedata){
                    $scope.user = responsedata;
                })
                .error(function(data) {
                    alert("Please try again");
                });

        };
        
        init();
    
    
}]);