/**
 * Created by w7 on 28.10.2016.
 */
angular.
module('productDetail').
component('productDetail', {
    templateUrl: 'app/product-detail/product-detail.template.html',
    controller: ['$routeParams', 'Product',
        function ProductDetailController($routeParams, Product) {
            this.product = Product.get({productType: $routeParams.productType, productID: $routeParams.productID});
        }
    ]
});