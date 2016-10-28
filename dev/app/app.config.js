/**
 * Created by w7 on 28.10.2016.
 */
angular.
module('camerasApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/cameras', {
            template: '<camera-list></camera-list>'
        }).
        when('/phones/:phoneId', {
            template: '<camera-detail></camera-detail>'
        }).
        otherwise('/cameras');
    }
]);