(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            .state('modalroom', {
                url: '/',
                controller: 'ModalRoomCtrl as modalroom',
                templateUrl: '/templates/modalroom.html'
            })
            .state('modaluser', {
                url: '/',
                controller: 'ModalUserCtrl as modaluser',
                templateUrl: '/templates/modaluser.html'
            });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})();
