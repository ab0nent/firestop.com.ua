/**
 * Created by w7 on 28.10.2016.
 */
angular.
module('productsApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/main', {
            templateUrl: 'app/static-pages/main.template.html'
        }).
        when('/about', {
            templateUrl: 'app/static-pages/about.template.html'
        }).
        when('/contacts', {
            templateUrl: 'app/static-pages/contacts.template.html'
        }).
        when('/products', {
            templateUrl: 'app/static-pages/products.template.html'
        }).
        when('/products/:productType', {
            template: '<product-list></product-list>'
        }).
        when('/products/:productType/:productID', {
            template: '<product-detail></product-detail>'
        }).
        otherwise('/main');
    }
]);