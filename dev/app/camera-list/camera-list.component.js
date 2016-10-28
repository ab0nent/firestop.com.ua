/**
 * Created by w7 on 28.10.2016.
 */
angular.
    module('cameraList').
    component( 'cameraList', {
    templateUrl: 'app/camera-list/camera-list.template.html',
    controller: function PhoneListController($http) {
        var self = this;

        $http.get('json/cameras/cameras.json').then(function(response) {
            self.cameras = response.data;
        });
    }
});
