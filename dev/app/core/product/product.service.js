/**
 * Created by w7 on 01.11.2016.
 */
angular.
module('core.product').
factory('Product', ['$resource',
    function($resource) {
        return $resource('json/:productType/:productID.json', {}, {
            query: {
                method: 'GET',
                params: {productType: 'cameras', productID: 'list'},
                isArray: true
            }
        });
    }
]);