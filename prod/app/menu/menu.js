angular
    .module('Menu', ['ngMaterial'])
    .controller('MenuCtrl', function MenuCtrl($location, $scope) {
        $scope.isActive = function (viewLocation) {
            var page = $location.path().split('/')[1];
            return viewLocation === page ? 'menu__item_active': '';
        };
    });