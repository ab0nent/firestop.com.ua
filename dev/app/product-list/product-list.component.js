/**
 * Created by w7 on 28.10.2016.
 */
angular.module('productList').component('productList', {
    templateUrl: 'app/product-list/product-list.template.html',
    controller: ['$routeParams', 'Product', '$location',
        function ProductListController($routeParams, Product, $location) {
            this.productType = $routeParams.productType;
            this.products = Product.query({productType: this.productType, productID: 'list'});
            this.orderProp = 'manufacturer';
            this.customFilter = {};
            this.numLimit = 30;

            var self = this;

            self.filter = [];

            var tmp_numLimit = JSON.parse(window.sessionStorage.getItem(self.productType + '_numLimit'));
            var tmp_orderProp = JSON.parse(window.sessionStorage.getItem(self.productType + '_orderProp'));
            var selectedManufactures = JSON.parse(window.sessionStorage.getItem(self.productType + '_filter'));
            var tmp_customFilter = JSON.parse(window.sessionStorage.getItem(self.productType));

            if (tmp_numLimit !== null) {
                self.numLimit = tmp_numLimit;
            }
            if (tmp_orderProp !== null) {
                self.orderProp = tmp_orderProp;
            }
            if (tmp_customFilter !== null) {
                if (Object.keys(tmp_customFilter).length > 0) {
                    self.customFilter = tmp_customFilter;
                }
            }

            self.manufacturerIsSelected = manufacturerIsSelected;
            self.checkNumLimit = checkNumLimit;
            self.saveFilter = saveFilter;
            self.goToProduct = goToProduct;
            self.showMore = showMore;
            self.filterByManufacturer = filterByManufacturer;
            self.getManufacturer = getManufacturer;

            function manufacturerIsSelected(manufacturer) {
                if (selectedManufactures !== null) {
                    return selectedManufactures.indexOf(manufacturer) >= 0;
                } else {
                    return true;
                }
            }

            function saveFilter() {
                window.sessionStorage.setItem(self.productType, JSON.stringify(self.customFilter));
                window.sessionStorage.setItem(self.productType + '_numLimit', JSON.stringify(self.numLimit));
                window.sessionStorage.setItem(self.productType + '_orderProp', JSON.stringify(self.orderProp));
                window.sessionStorage.setItem(self.productType + '_filter', JSON.stringify(self.filter));
            }

            function goToProduct(product) {
                checkNumLimit();
                saveFilter();
                scrollTop();
                var productUrl = '/products/' + self.productType + '/' + product.id;
                $location.path(productUrl);
            }

            function showMore() {
                self.numLimit += 10;
                checkNumLimit()
            }

            function checkNumLimit() {
                if (self.numLimit > self.products.length || isNaN(self.numLimit)) {
                    self.numLimit = self.products.length;
                }
            }

            function filterByManufacturer(product) {
                return self.filter.indexOf(product.manufacturer) >= 0;
            }

            function getManufacturer() {
                return (self.products || []).map(function (product) {
                    return product.manufacturer;
                }).filter(function (cat, idx, arr) {
                    return arr.indexOf(cat) === idx;
                });
            }
        }
    ]
});
