/**
 * Created by w7 on 28.10.2016.
 */
angular.module('camerasApp').component( 'cameraList', {
    template:
        '<ul>' +
            '<li ng-repeat="camera in cameras">' +
                '<span>{{camera.name}}</span>' +
            '</li>' +
        '</ul>',
    controller: function CamerasListController($scope) {
        $scope.cameras = [
            {
                "id":  "dahua_technology_hac-hdw1000r",
                "name":  "Dahua Technology HAC-HDW1000R",
                "image":  "img/cameras/201403901398596-261x261.jpg"
            },
            {
                "id":  "dahua_technology_hac-hdw1000r-s2_-3-6_mm",
                "name":  "Dahua Technology HAC-HDW1000R-S2 (3.6 мм)",
                "image":  "img/cameras/201403901398596-261x261.jpg"
            },
            {
                "id":  "dahua_technology_hac-hdw1000r-s2_-2-8_mm",
                "name":  "Dahua Technology HAC-HDW1000R-S2 (2.8 мм)",
                "image":  "img/cameras/201403901398596-261x261.jpg"
            }];

    }
});
