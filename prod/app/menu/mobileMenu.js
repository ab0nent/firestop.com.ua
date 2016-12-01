angular
    .module('MobileMenu', ['ngMaterial'])
    .controller('MobileMenuCtrl', function MobileNavCtrl($location) {
        this.menuItems = ['ГЛАВНАЯ', 'ОБОРУДОВАНИЕ', 'КОНТАКТЫ'];
        this.mobileMenuClick = function (item) {
            scrollTop();
            switch(item){
                case 'ГЛАВНАЯ':
                    $location.path('/');
                    break;
                case 'ОБОРУДОВАНИЕ':
                    $location.path('/products');
                    break;
                case 'КОНТАКТЫ':
                    $location.path('/contacts');
                    break;
                default:
                    $location.path('/');
            }
        };
    });
