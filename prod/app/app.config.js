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
        when('/main', {
            templateUrl: 'app/static-pages/main.template.html'
        }).
        when('/about', {
            templateUrl: 'app/static-pages/about.template.html'
        }).
        when('/contacts', {
            templateUrl: 'app/static-pages/contacts.template.html'
        }).
        when('/cameras/:id', {
            template: '<camera-detail></camera-detail>'
        }).
        otherwise('/main');
    }
]);