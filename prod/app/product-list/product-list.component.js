/**
 * Created by w7 on 28.10.2016.
 */
angular.
    module('productList').
    component( 'productList', {
    templateUrl: 'app/product-list/product-list.template.html',
    controller: ['$routeParams', 'Product', '$location',
        function ProductListController($routeParams, Product, $location) {
            this.productType = $routeParams.productType
            this.products = Product.query({productType: this.productType, productID: 'list'});
            this.orderProp = 'manufacturer';
            this.numLimit = 30;


            var self = this;
            self.filter = [];
            self.goToProduct = goToProduct;
            self.showMore = showMore;
            self.filterByManufacturer = filterByManufacturer;
            self.getManufacturer = getManufacturer;

            function goToProduct(product) {
                scrollTop();
                var productUrl = '/products/' + self.productType + '/' + product.id;
                $location.path(productUrl);
            }

            function showMore() {
                    self.numLimit += 10;
                    if(self.numLimit > self.products.length){
                        self.numLimit = self.products.length;
                    }
            }

            function filterByManufacturer(product) {
                return self.filter.indexOf(product.manufacturer) >= 0;
            }

            function getManufacturer() {
                return (self.products || []).
                map(function (product) { return product.manufacturer; }).
                filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
            }
        }
    ]
});
