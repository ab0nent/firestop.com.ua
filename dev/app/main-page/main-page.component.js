/**
 * Created by w7 on 29.11.2016.
 */
angular.module('mainPage').component('mainPage', {
    templateUrl: 'app/main-page/main-page.template.html',
    controller: ['$mdDialog',
        function MainPageController($mdDialog) {
            var self = this;

            self.showAlert = showAlert;

            function showAlert(ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('body')))
                        .clickOutsideToClose(true)
                        .title('Свяжитесь с нами')
                        .textContent('Позвоните нам по номеру телефона +38 050 906 98 74 или отправьте сообщение на наш адрес электронной почты info@firestop.com.ua')
                        .ariaLabel('Alert Dialog')
                        .ok('OK')
                        .targetEvent(ev)
                );
            }
        }
    ]
});