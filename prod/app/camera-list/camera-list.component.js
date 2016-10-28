/**
 * Created by w7 on 28.10.2016.
 */
angular.
    module('cameraList').
    component( 'cameraList', {
    templateUrl: 'app/camera-list/camera-list.template.html',
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
            },
            {
                "id":  "hikvision_ds-2ce55a2p-irp_-2-8_mm",
                "name":  "Hikvision DS-2CE55A2P-IRP (2.8 мм)",
                "image":  "img/cameras/DS-2CE55A2P-IRP-600x600-261x261.jpg"
            },
            {
                "id":  "dahua_technology_hac-hfw1000r-s2_-3-6_mm",
                "name":  "Dahua Technology HAC-HFW1000R-S2 (3.6 мм)",
                "image":  "img/cameras/201505882612588-261x261.jpg"
            },
            {
                "id":  "hikvision_ds-2ce15a2p-ir",
                "name":  "Hikvision DS-2CE15A2P-IR",
                "image":  "img/cameras/1415_3-261x261.jpg"
            },
            {
                "id":  "hikvision_ds-2ce55a2p-irm_-2-8_mm",
                "name":  "Hikvision DS-2CE55A2P-IRM (2.8 мм)",
                "image":  "img/cameras/2046-261x261.jpg"
            },
            {
                "id":  "dahua_technology_hac-hfw1000r-s2_-2-8_mm",
                "name":  "Dahua Technology HAC-HFW1000R-S2 (2.8 мм)",
                "image":  "img/cameras/201505882612588-261x261.jpg"
            }
        ];

    }
});
