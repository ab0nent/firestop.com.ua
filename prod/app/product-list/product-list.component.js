/**
 * Created by w7 on 28.10.2016.
 */
angular.
    module('productList').
    component( 'productList', {
    templateUrl: 'app/product-list/product-list.template.html',
    controller: ['$routeParams', 'Product',
        function ProductListController($routeParams, Product) {
            this.productType = $routeParams.productType
            this.products = Product.query({productType: this.productType, productID: 'list'});
            this.orderProp = 'id';

            var self = this;
            self.filter = {};
            self.filterByManufacturer = filterByManufacturer;
            self.getManufacturer = getManufacturer;
            function filterByManufacturer(product) {

                return self.filter[product.manufacturer] || noFilter(self.filter);
            }

            function getManufacturer() {
                return (self.products || []).
                map(function (product) { return product.manufacturer; }).
                filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
            }

            function noFilter(filterObj) {
                return Object.
                keys(filterObj).
                every(function (key) { return !filterObj[key]; });
            }
        }
    ]
});
