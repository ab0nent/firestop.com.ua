angular
    .module('MobileMenu', ['ngMaterial'])
    .controller('MobileMenuCtrl', function MobileNavCtrl($location) {
        this.menuItems = ['ГЛАВНАЯ', 'ОБОРУДОВАНИЕ', 'КОНТАКТЫ'];
        scrollTop();
        this.mobileMenuClick = function (item) {
            switch(item){
                case 'ГЛАВНАЯ':
                    changeActiveMenuItem(0);
                    $location.path('/');
                    break;
                case 'ОБОРУДОВАНИЕ':
                    changeActiveMenuItem(1);
                    $location.path('/products');
                    break;
                case 'КОНТАКТЫ':
                    changeActiveMenuItem(2);
                    $location.path('/contacts');
                    break;
                default:
                    changeActiveMenuItem(0);
                    $location.path('/');
            }
        };
    });
