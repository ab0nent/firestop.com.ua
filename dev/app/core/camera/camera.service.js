/**
 * Created by w7 on 01.11.2016.
 */
angular.
module('core.camera').
factory('Camera', ['$resource',
    function($resource) {
        return $resource('json/cameras/:id.json', {}, {
            query: {
                method: 'GET',
                params: {id: 'cameras'},
                isArray: true
            }
        });
    }
]);