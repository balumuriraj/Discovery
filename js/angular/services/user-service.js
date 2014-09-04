//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

"use strict";

app.factory('userFactory', ['$http', '$cookieStore', function($http, $cookieStore) {
    var baseUrl = "http://localhost:8080/Discoveryapi";
    
    return {
        guestUserLogin: function(user){
            return $http({
                headers: {'Content-Type': 'application/json'},
                url: baseUrl + '/guestUserLogin',
                method: "POST",
                data: user
            })
            .success(function(responseData) {
                console.log("Guest user logged in: " + responseData.name);
                $cookieStore.put('loggedin', 'true');
                $cookieStore.put('userid', responseData.id);
            })
            .error(function(data) {
                console.log("Guest user log in failed..");
            });
        },
        
        getUser: function(){
            var userid = $cookieStore.get('userid');
            
            return $http({
                url: baseUrl + '/getUser/' + userid,
                method: "GET"
            })
            .success(function(responseData) {
                console.log("Got User ..");
                return responseData;
            })
            .error(function(data) {
                console.log("Get User failed..");
            });
        },
        
        isLoggedIn: function(){
            var loginstatus;
            loginstatus = $cookieStore.get('loggedin');
            if(loginstatus == null)
            {
                loginstatus = false;
            }
            return loginstatus;
        },
        
        logout: function(){
            $cookieStore.remove('loggedin');
            $cookieStore.remove('userid');
            $cookieStore.remove('timer');
        }
    };
}]);