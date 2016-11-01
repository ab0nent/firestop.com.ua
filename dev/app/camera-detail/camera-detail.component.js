/**
 * Created by w7 on 28.10.2016.
 */
angular.
module('cameraDetail').
component('cameraDetail', {
    templateUrl: 'app/camera-detail/camera-detail.template.html',
    // controller: ['$http','$routeParams',
    //     function CameraDetailController($http, $routeParams) {
    //         var self = this;
    //
    //         $http.get('json/cameras/' + $routeParams.id + '.json')
    //             .then(function (response) {
    //                 self.camera = response.data;
    //                 console.log(self.camera.name);
    //             });
    //     }
    // ]
    controller: ['$routeParams', 'Camera',
        function CameraDetailController($routeParams, Camera) {
            this.camera = Camera.get({id: $routeParams.id});
        }
    ]


});