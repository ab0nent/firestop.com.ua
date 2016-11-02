/**
 * Created by w7 on 28.10.2016.
 */
angular.
module('cameraDetail').
component('cameraDetail', {
    templateUrl: 'app/camera-detail/camera-detail.template.html',
    controller: ['$routeParams', 'Camera',
        function CameraDetailController($routeParams, Camera) {
            this.camera = Camera.get({id: $routeParams.id});
        }
    ]
});