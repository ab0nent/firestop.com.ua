/**
 * Created by w7 on 28.10.2016.
 */
angular.
module('productsApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

        $routeProvider.
        when('/main', {
            template: '<main-page></main-page>'
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