/**
 * Created by w7 on 28.10.2016.
 */
angular.
module('cameraDetail').
component('cameraDetail', {
    template: 'Details for <span>{{$ctrl.ID}}</span>',
    controller: ['$routeParams',
        function CameraDetailController($routeParams) {
            this.ID = $routeParams.ID;
        }
    ]
});