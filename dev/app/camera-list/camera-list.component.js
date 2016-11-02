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

            var self = this;
            self.filter = {};
            self.filterByManufacturer = filterByManufacturer;
            self.getManufacturer = getManufacturer;

            function filterByManufacturer(camera) {
                return self.filter[camera.manufacturer] || noFilter(self.filter);
            }

            function getManufacturer() {
                return (self.cameras || []).
                map(function (camera) { return camera.manufacturer; }).
                filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
            }

            function noFilter(filterObj) {
                return Object.
                keys(filterObj).
                every(function (key) { return !filterObj[key]; });
            }
        }
    ]
});
