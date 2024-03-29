angular.module("ngTimer", [])
    .directive('timer', ['$interval', '$cookieStore',
        function ($interval, $cookieStore) {

            function link(scope, element, attrs) {
                var timeoutId,
                    seconds = scope.useranswer.clock;

                function updateTime() {
                    seconds++;
                    element.text(pad(parseInt(seconds / 60)) +":" + pad(seconds % 60));
                    scope.useranswer.clock = seconds;
                    $cookieStore.put('timer', seconds);
                }
                
                function pad(val) {
                    var valString = val + "";
                    if (valString.length < 2) {
                        return "0" + valString;
                    } else {
                        return valString;
                    }
                }

                /*
                element.on('$destroy', function () {
                    $interval.cancel(timeoutId);
                });
                */

                // start the UI update process; save the timeoutId for canceling
                timeoutId = $interval(function () {
                    updateTime(); // update DOM
                }, 1000);
            }

            return {
                restrict: 'EA', //E = element, A = attribute, C = class, M = comment   
                link: link
            };

}]);