/**
 * Created by w7 on 28.10.2016.
 */
angular.
    module('cameraList').
    component( 'cameraList', {
    templateUrl: 'app/camera-list/camera-list.template.html',
    controller: ['Camera',
        function CameraListController(Camera) {
            this.cameras = Camera.query();
            this.orderProp = 'id';
        }
    ]
});
